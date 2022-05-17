<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\LocationType;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Location::where("parent_id", null)->get();
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
        $validatedData = $request;
        /*
        $request->validate([
                'name' => 'required|string|min:8',
                'description' => 'required|string|min:8',
            ]);
        */
        //Buscamos el type al que pertenece la location que nos estan mandando, no podemos confiar en que nos manden eso por REQ
        if ($validatedData["parent_id"]) {
            //buscamos el tipo de locacion en base a el primer hijo de nuestra Location padre
            // Despues le preguntamos a ese por nuestro location TYPE, que devuelve el objecto LocationType y a ese le preguntamos por su hijo, y a el le preguntamos por su id
            $type_id = Location::where("id", $validatedData["parent_id"])->first()->type->child->id;
        } else { //es pais, o nodo padre digamos
            $type_id = LocationType::where("parent_id", null)->first()->id;
        }
        $location = Location::create([
            "parent_id" => $validatedData["parent_id"] ?? null,
            "type_id" => $type_id,
            "name" => $validatedData["name"],
            "code" => $validatedData["code"],
            "postal_code" => $validatedData["postal_code"],
            "lat" => $validatedData["lat"],
            "lon" => $validatedData["lon"],
        ]);
        return $location;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function show(Location $location)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function edit(Location $location)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Location $location)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function destroy(Location $location)
    {
        //
    }
}
