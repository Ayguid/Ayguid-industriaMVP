<?php

namespace App\Http\Controllers;

use App\Models\Entity;
use App\Models\EntityCategory;
use App\Models\User;
use Illuminate\Http\Request;
use DB;

class EntityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //return $request->user()->id;
        //nosotros mostramos desde el controlador las del user auth, la lista entera la mostramos desde otro controlador
        $userEntities = Entity::where('user_id', $request->user()->id)->orWhere('created_by_user_id', $request->user()->id)->where('user_id', false)->with('country', 'state', 'city')->get(); //las que somos dueños
        //$userCreated = Entity::where('created_by_user_id', $id)->where("user_id", 0)->get(); //las que creamos sin ser dueños
        return $userEntities;
    }
    /*
    public function userEntities(Request $request, $id)
    {
        //buscamos por parametro porque la api es publica, y no tenemos request user o auth user,,,,
        $userEntities = Entity::where('user_id', $id)->orWhere('created_by_user_id', $id)->where('user_id', false)->get(); //las que somos dueños
        //$userCreated = Entity::where('created_by_user_id', $id)->where("user_id", 0)->get(); //las que creamos sin ser dueños

        return $userEntities;
    }
    */
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
        //return $request;
        return DB::transaction(function () use ($request) {
            //validamos la data obligatoria////////////
            $validatedData = $request->validate([
                'username' => 'required|string|min:4|unique:entities',
                'name' => 'required|string|min:4',
                'description' => 'required|string|min:8',
            ]);
            //Creacion de entidad//////////////
            //si el usuario no creo la entidad dejamos el user id en false/0
            //guardamos por otro lado quien creo la entidad en, created_by 
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
                    'country_id' => $request['country_id'] ?? null,
                    'state_id' => $request['state_id'] ?? null,
                    'city_id' => $request['city_id'] ?? null,
                    //'location_id' => $request['location']['id']
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
                //salvamos todas las categories para ese entity
                $newEntity->entCats()->saveMany($entCats);
            }
            //devolvemos una respuesta
            //return $newEntity;
            //pedimos el entity devuelta porque sino no refresca las relations, bug raro
            return Entity::where('id', $newEntity->id)->with('country', 'state', 'city')->first();
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
        //return $entity->id;
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
                    'country_id' => $request['country_id'] ?? null,
                    'state_id' => $request['state_id'] ?? null,
                    'city_id' => $request['city_id'] ?? null,
                ]
            );
            // si llego un array con ids de categorias en $request['catIds'], creamos las entityCategories
            if ($request['catIds'] && count($request['catIds']) > 0) {
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
            }
            //pedimos el entity devuelta porque sino no refresca las relations, bug raro
            return Entity::where('id', $entity->id)->with('country', 'state', 'city')->first();
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
        $entity->entCats()->delete();
        return $entity->delete();
    }
}
