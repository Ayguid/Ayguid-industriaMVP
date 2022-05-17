<?php

namespace App\Http\Controllers;

use App\Models\UserBookmark;
use Illuminate\Http\Request;
use App\Models\Entity;
use App\Models\User;

class UserBookmarkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function userBookmarks(Request $request, $id)
    {
        # code...
        return User::where('id', $id)->first()->bookmarks()->withCount([
            'bookmarks',
            'bookmarks as bookmarked' => function ($q) use ($id) {
                $q->where('user_id', $id);
            }
        ])->withCasts(['bookmarks' => 'boolean'])->paginate();
    }




    public function toggle(Entity $entity)
    {
        //$result = $entity->bookmarks()->toggle(auth()->id()); //toggle alterna automaticamente el postlike, WOW
        //ver porque si uso $entity al final (en vez de hacer un query de Entity where...) me trae una colection grande o el primero que esta mal
        $entity->bookmarks()->toggle(auth()->id());
        return Entity::where('id', $entity->id)->with('bookmarks')->withCount([
            'bookmarks',
            'bookmarks as bookmarked' => function ($q) {
                $q->where('user_id', auth()->id());
            }
        ])->withCasts(['bookmarks' => 'boolean'])->first();
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserBookmark  $userBookmark
     * @return \Illuminate\Http\Response
     */
    public function show(UserBookmark $userBookmark)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserBookmark  $userBookmark
     * @return \Illuminate\Http\Response
     */
    public function edit(UserBookmark $userBookmark)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserBookmark  $userBookmark
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserBookmark $userBookmark)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserBookmark  $userBookmark
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserBookmark $userBookmark)
    {
        //
    }
}
