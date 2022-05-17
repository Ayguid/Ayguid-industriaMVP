<?php

namespace App\Http\Controllers;

use App\Models\Entity;
use App\Models\EntityCategory;
use Illuminate\Http\Request;
use DB;

class EntityController extends Controller
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
        return DB::transaction(function () use ($request) {
            //validamos la data obligatoria////////////
            $validatedData = $request->validate([
                'name' => 'required|string|min:8',
                'description' => 'required|string|min:8',
            ]);
            //Creacion de entidad//////////////
            //si el usuario no creo la entidad dejamos el user id en false/0
            //guardamos por otro lado quien creo la entidad en created_by 
            $newEntity = Entity::create(
                [
                    'user_id' => $request['userOwnsEntity'] ? $request->user()->id : false,
                    'created_by_user_id' => $request->user()->id,
                    'name' => $validatedData['name'],
                    'email' => $request['email'],
                    'username' => $request['username'],
                    'description' => $validatedData['description'],
                    'phone' => $request['phone'],
                    'cellphone' => $request['cellphone'],
                ]
            );
            // si llego un array con ids de categorias en $request['catIds'], creamos las entityCategories
            if (count($request['catIds']) > 0) {
                $entCats = [];
                for ($i = 0; $i < count($request['catIds']); $i++) {
                    $entityCategory = new EntityCategory(
                        [
                            'category_id' => $request['catIds'][$i],
                        ]
                    );
                    array_push($entCats,  $entityCategory);
                }
                $newEntity->entCats()->saveMany($entCats);
            }
            //devolvemos una respuesta
            return $newEntity;
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Entity  $entity
     * @return \Illuminate\Http\Response
     */
    public function show(Entity $entity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Entity  $entity
     * @return \Illuminate\Http\Response
     */
    public function edit(Entity $entity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Entity  $entity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Entity $entity)
    {
        return DB::transaction(function () use ($request, $entity) {
            //
            //return [$request->all(), $entity];
            //validamos la data obligatoria////////////
            $validatedData = $request->validate([
                'name' => 'required|string|min:8',
                'description' => 'required|string|min:8',
            ]);
            //Creacion de entidad//////////////
            //si el usuario no creo la entidad dejamos el user id en false/0
            //guardamos por otro lado quien creo la entidad en created_by 
            $entity->entCats()->delete(); //chanchada, borramos todas las cats y guardamos de cero, mejorar este asco
            //


            //
            $entity->update(
                [
                    'user_id' => $request['userOwnsEntity'] ? $request->user()->id : false,
                    'created_by_user_id' => $request->user()->id,
                    'name' => $validatedData['name'],
                    'email' => $request['email'],
                    'username' => $request['username'],
                    'description' => $validatedData['description'],
                    'phone' => $request['phone'],
                    'cellphone' => $request['cellphone'],
                ]
            );
            // si llego un array con ids de categorias en $request['catIds'], creamos las entityCategories
            if (count($request['catIds']) > 0) {
                $entCats = [];
                for ($i = 0; $i < count($request['catIds']); $i++) {
                    $entityCategory = new EntityCategory(
                        [
                            'category_id' => $request['catIds'][$i],
                        ]
                    );
                    array_push($entCats,  $entityCategory);
                }
                $entity->entCats()->saveMany($entCats);
                //$entity->categories->pluck('name', 'id');
            }
            //$entity->categories;
            return $entity;
        });
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Entity  $entity
     * @return \Illuminate\Http\Response
     */
    public function destroy(Entity $entity)
    {
        //
    }
}
