<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\APIPasswordResetToken;
//use App\Models\Category;
use App\Models\Entity;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'description',
        'country',
        'state',
        'city',
        'street',
        'stree_number',
        'postal_code',
        'phone',
        'cellphone',
        'profile_photo_path',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['profile_photo_path_full_url'];
    protected $with = ['roles'];

    public function resetTokens()
    {
        return $this->hasMany(APIPasswordResetToken::class, 'user_id');
    }
    /*
    public function getUserCategoriesAttribute()
    {
        return $this->categories()->get();
    }

    public function categories()
    {
        return $this->hasManyThrough(Category::class, User_Category::class, 'user_id',  'id', 'id', 'category_id');
    }
    */

    public function getProfilePhotoPathFullUrlAttribute()
    {
        return url('storage/' . $this->profile_photo_path);
    }

    public function entities()
    {
        # code...
        return $this->hasMany(Entity::class);
    }

    public function bookmarks()
    {
        # code...
        return $this->hasManyThrough(Entity::class, UserBookmark::class, 'user_id',  'id', 'id', 'entity_id');
    }
}
