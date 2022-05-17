<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Notifications\APIPasswordResetNotification;
use App\Models\APIPasswordResetToken;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use \Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
  //
  public function register(Request $request)
  {
    //return $request;
    //Working
    /*
    $validatedData = $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|string|email|max:255|unique:users',
      'username' => 'required|string|max:255|unique:users',
      'password' => 'required|string|min:8',
    ]);
    $user = User::create([
      'name' => $validatedData['name'],
      'email' => $validatedData['email'],
      'username' => $validatedData['username'],
      'job_description' => $request['job_description'],
      'phone' => $request['phone'],
      'cellphone' => $request['cellphone'],
      'address' => $request['address'],
      'password' => Hash::make($validatedData['password']),
    ]);
    */
    $validatedData = $request->validate([
      'email' => 'required|string|email|max:255|unique:users',
      'password' => 'required|confirmed|string|min:8',
    ]);
    //return $validatedData;
    $user = User::create([
      'email' => $validatedData['email'],
      'password' => Hash::make($validatedData['password']),
    ]);
    /*
    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
      'access_token' => $token,
      'token_type' => 'Bearer',
    ]);
    */
    return response()->json([
      'user' => $user,
    ]);
  }

  public function login(Request $request)
  {
    /*
    if (!Auth::attempt($request->only('email', 'password'))) {
      return response()->json([
        'message' => 'Invalid login details'
      ], 401);
    }
    */

    $user = User::where('email', $request['email'])->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
      throw ValidationException::withMessages([
        'email' => ['The provided credentials are incorrect.'],
      ]);
    }

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
      'access_token' => $token,
      'user' => $user
    ]);

    //Working
    // nuevo metodo para usar el token que laravel guarda en los cookies, no guardamos tokens en base de datos
    /*
    $credentials = $request->validate([
      'email' => ['required', 'email'],
      'password' => ['required'],
    ]);

    if (Auth::attempt($credentials)) {
      $request->session()->regenerate();
      return response()->json([
        'user' => Auth::user(),
      ]);
    }
    return response()->json([
      'message' => 'Invalid login details'
    ], 401);
    */
    //
  }

  public function logout(Request $request)
  {
    /*
    // Revoke all tokens...
    $user->tokens()->delete();

    // Revoke the token that was used to authenticate the current request...
    $request->user()->currentAccessToken()->delete();

    // Revoke a specific token...
    $user->tokens()->where('id', $tokenId)->delete();
    */
    //return $request->user();
    $status =  $request->user()->currentAccessToken()->delete();
    //$status = Auth::user()->currentAccessToken()->delete();
    //$status = Auth::guard('web')->logout();

    return response()->json([
      'status' => $status
    ]);
    /*
    if(method_exists(auth()->user()->currentAccessToken(), 'delete')) {
    auth()->user()->currentAccessToken()->delete();
    }else{
      auth()->guard('web')->logout();
    }
    */
    //working
    /*
    // nuevo metodo para usar el token que laravel guarda en los cookies
    //Auth::logout(); no anda
    auth('web')->logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return response()->json([
      'status' => null
    ]);
    */
    //
  }

  public function me(Request $request)
  {
    return $request->user();
  }

  public function updateUserDetails(Request $request)
  {
    $request->validate([
      //'name' => 'required|string|max:255',
      'email' => 'required | email | unique:users,email,' . $request->user()->id,
      //'username' => 'required|string|max:255|unique:users,username,' . $request->user()->id
    ]);

    $request->user()->update($request->only('name', 'email', 'username', 'description', 'phone', 'cellphone', 'address'));
    /*
    $validatedData = $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required | email | unique:users,email,' . $request->user()->id,
      'username' => 'required|string|max:255|unique:users,username,' . $request->user()->id
    ]);
    $request->user()->name = $validatedData['name'];
    $request->user()->email = $validatedData['email'];
    $request->user()->username = $validatedData['username'];
    $request->user()->job_description = $request['job_description'];
    $request->user()->phone = $request['phone'];
    $request->user()->cellphone =  $request['cellphone'];
    $request->user()->address = $request['address'];
    $request->user()->update();
    */
    return $request->user();
  }

  public function changePassword(Request $request)
  {

    $validatedData = $request->validate([
      'oldPassword' => 'required|string|min:8',
      'password' => 'required|confirmed|string|min:8',
      //'passwordConfirm' => 'required|string|min:8',
    ]);

    if (Hash::check($validatedData['oldPassword'], $request->user()->password)) { // if pass ok

      $request->user()->password = Hash::make($validatedData['password']);
      $request->user()->update();
      return response()->json([
        'message' => 'Password changed successfully'
      ], 200);
    } else {
      return response()->json([
        'message' => 'Invalid credential details'
      ], 400);
    }
  }

  //
  public function sendPasswordResetToken(Request $request)
  {
    $validatedData = $request->validate([
      'email' => 'required | email '
    ]);

    $user = User::where('email', $validatedData['email'])->firstOrFail();
    return $this->sendPassResetMail($user);
  }

  //mover a un trait o algo,,,,?
  public function sendPassResetMail(User $user)
  {   //generamos un codigo alphanumerico
    $code = substr(str_shuffle("0123456789abcdefghijklmnopqrstvwxyz"), 0, 6); //mejorar alphanumeric
    //creamos el token hasheando el alphanumerico y lo guardamos
    APIPasswordResetToken::create(
      [
        'user_id' => $user->id,
        'token_signature' => hash('md5', $code),
        'expires_at' => Carbon::now()->addMinutes(30),
      ]
    );
    //le enviamos el mail con el codigo sin hashear, con una validez de 30 min
    try {
      $user->notify(new APIPasswordResetNotification($code));
      return response()->json([
        'message' => 'Mail sent'
      ], 200);
    } catch (\Throwable $th) {
      return response()->json([
        'message' => $th
      ], 401);
    }
  }

  public function resetPassword(Request $request)
  {
    $validatedData = $request->validate([
      'email' => 'required|string|email|max:255|exists:users',
      'code' => 'required|string|max:255',
      'password' => 'required|confirmed|string|max:255',
      //'passwordConfirm' => 'required|string|max:255',
    ]);
    $user = User::where('email', $validatedData['email'])->first();
    if (!$user) { // si no hay mail....
      return response()->json([
        'message' => 'Invalid email'
      ], 401);
    }
    //
    $hashedCode = hash('md5', $validatedData['code']);
    //
    $token = $user->resetTokens->where('token_signature', $hashedCode)
      ->where('user_id', $user->id)->where('used_token', null)->first();
    if (!$token) {
      return response()->json([
        'message' => 'Invalid token'
      ], 401);
    }
    if (Carbon::now()->greaterThan($token->expires_at) || $token->used_token) {
      return response()->json([
        'message' => 'Token exipred'
      ], 401);
    }
    if ($token) { //&& !$token->used_token
      $token->used_token = true;
      $token->update();
      $user->password = Hash::make($validatedData['password']);
      $user->update();
      return response()->json([
        'message' => 'Password reset ok, Please login with new credentials'
      ], 200);
    }
  }

  // Profile Pic
  public function storeProfilePic(Request $request)
  {
    $file = $request->file('file');
    //borar foto anterior
    if ($request->user()->profile_photo_path) Storage::disk('public')->delete($request->user()->profile_photo_path);

    if ($file) {
      $path = $request->file('file')->store('media/' . $request->user()->id . '/' . now()->format('Y') . '/' . now()->format('m'), 'public');
    } else {
      $path = 'avatar.jpg';
    }
    $request->user()->profile_photo_path = $path;
    $request->user()->update();

    return response()->json([
      'user' => $request->user()
    ]);
  }
}
