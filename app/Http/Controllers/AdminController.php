<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\Material;
use App\Models\Process;
use App\Models\Category;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    protected $userISadmin;
    
    public function __construct()
    {
        //$this->middleware('super-admin');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }



    public function storeCategory(Request $request)
    {
        $category = Category::create([
            'parent_id' => $request['parent_id'],
            'name' => $request['name'],
        ]);
        $category->children;
        return response()->json([
            'message' => 'Category added succesfully',
            'category' => $category,
            //'user' => Auth::user()->is_admin
        ]);
    }

    public function updateCategory(Request $request) //falta validar el REQUEST!!!
    {
        $category = Category::find($request['id']);
        $category->name = $request['name'];
        $category->update();
        return response()->json([
            'message' => 'Category updated succesfully',
            'category' => $category,
            //'user' => Auth::user()->is_admin
        ]);
    }
}
