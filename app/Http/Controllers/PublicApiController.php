<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Entity;
use App\Models\Location;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Support\Collection; //herramienta para paginear jsons

class PublicApiController extends Controller
{
    //buscamos paises con ese nombre
    public function fetchCountries(Request $request)
    {
        //$queryParam = $request['query'];
        /*
        $locations = Location::whereHas('type',  function ($loc) {
            return $loc->where('name', 'country');
        });
        */
        $locations = Location::where('parent_id', null)->get();
        return response($locations, 200);
    }
    public function fetchStates(Request $request)
    {
        $parent_id = $request['parent_id'];
        $locations = Location::where("parent_id", $parent_id)->get();
        return response($locations, 200);
    }
    public function fetchCities(Request $request)
    {
        $parent_id = $request['parent_id'];
        /*
        $locations = Location::whereHas('type',  function ($loc) {
            return $loc->where('name', 'city');
        })->where("parent_id", $parent_id);
        */
        $locations = Location::where("parent_id", $parent_id)->get();
        return response($locations, 200);
    }

    public function locations(Request $request)
    {
        //return $request->all();
        // para buscar la localidad en el json de localidades por nombre de localidad, y pagineamos
        $queryParam = $request['query']; // el nombre que escribieron

        // $locations = [];

        $locations = Location::where("name", 'like', '%' . $queryParam . '%')
            ->orWhereHas('parent',  function ($loc) use ($queryParam) {
                return $loc->where("name", 'like', '%' . $queryParam . '%');
            })->with('parent')->paginate(100);
        //where("name", 'like', '%' . $queryParam . '%')->get();

        /*
        $json = Storage::disk('local')->get('jsons/localidades.json');
        $collection = (new Collection(json_decode($json, true)['localidades']));
        $data = $collection->filter(function ($item) use ($queryParam) {
            // replace stristr,stripos,etc with your choice of matching function
            //buscamos los que tienen nombre parecido en la localidad o provincia
            return false !== stripos($item['nombre'], $queryParam) || false !== stripos($item['provincia']['nombre'], $queryParam);
        });
        return response($data->paginate(50), 200);
        */
        //Version de Locations en base de datos
        //$data = Location::where("name", 'like', '%' . $queryParam . '%');
        return response($locations, 200);
    }
    //
    public function categories()
    {
        //
        //$materials = Material::all();
        $parent_categories = Category::where('parent_id', null)->with('children')->get();
        return response()->json([
            'categories' => $parent_categories,
            'entities' => []
            //'user' => auth()->user()->categories
        ]);
    }
    //
    //
    //
    public function entitiesListing(Request $request)
    {
        //return $request->all();
        # code...
        $paginate = 9;
        $user_id = $request->user('sanctum')->id ?? null;
        //return response($request['catIds']);
        //$retu = [];
        /* MEJROAR ESTOS QUERIES, SE PUEDE HACER TODO EN UNO */
        /**/
        /**/
        // Si llega array de cats, y no hay location,,,
        if (!empty($request['selectedCategories']) && empty($request['locations'])) {
            //array_push($retu, 1);
            $catsArrayIds = $request['selectedCategories'];
            $entities = Entity::whereHas('categories',  function ($query) use ($catsArrayIds) {
                return $query->whereIn('category_id', $catsArrayIds)->orWhereIn('parent_id', $catsArrayIds);
            })
                ->with(['user', 'categories'])->withCount([
                    'bookmarks',
                    'bookmarks as bookmarked' => function ($q) use ($user_id) {
                        $q->where('user_id', $user_id);
                    }
                ])->withCasts(['bookmarks' => 'boolean']); //el appends request query es para que nos vuelvan los parametros del filtro que fueron por get request
        }
        // Si llega array de locations sin categorias
        if (!empty($request['locations']) && empty($request['selectedCategories'])) {
            //array_push($retu, 2);
            $locationsArray = $request['locations'];
            $entities = Entity::whereIn('country_id', $locationsArray)->orWhereIn('state_id', $locationsArray)->orWhereIn('city_id', $locationsArray)
                ->with(['user', 'categories'])->withCount([
                    'bookmarks',
                    'bookmarks as bookmarked' => function ($q) use ($user_id) {
                        $q->where('user_id', $user_id);
                    }
                ])->withCasts(['bookmarks' => 'boolean']); //el appends request query es para que nos vuelvan los parametros del filtro que fueron por get request
        }
        // Si llega array de locations y categorias
        if (!empty($request['locations']) && !empty($request['selectedCategories'])) {
            //array_push($retu, 3);
            $locationsArray = $request['locations'];
            $catsArrayIds = $request['selectedCategories'];
            $entities = Entity::whereIn('country_id', $locationsArray)->orWhereIn('state_id', $locationsArray)->orWhereIn('city_id', $locationsArray)

                ->whereHas('categories',  function ($query) use ($catsArrayIds) {
                    return $query->whereIn('category_id', $catsArrayIds)->orWhereIn('parent_id', $catsArrayIds);
                })->with(['user', 'categories'])->withCount([
                    'bookmarks',
                    'bookmarks as bookmarked' => function ($q) use ($user_id) {
                        $q->where('user_id', $user_id);
                    }
                ])->withCasts(['bookmarks' => 'boolean']); //el appends request query es para que nos vuelvan los parametros del filtro que fueron por get request
            //
        }
        // sino hay categorias ni locations,,,, todo
        else if (empty($request['locations']) && empty($request['selectedCategories'])) {
            //array_push($retu, 4);
            $entities = Entity::with(['user', 'categories'])->withCount([
                'bookmarks',
                'bookmarks as bookmarked' => function ($q) use ($user_id) {
                    $q->where('user_id', $user_id);
                }
            ])->withCasts(['bookmarks' => 'boolean']);
        }
        //devolvemos los entities pagineados..
        return $entities->paginate($paginate)->appends(request()->query());
    }
    //
    //
    //
    public function showEntity(Request $request, Entity $entity)
    {
        if ($request['page']) { //sacamos el count de bookmarks en los req de posts pagineados
            $entity = $entity;
        } else {
            $entity = Entity::where('username', $entity->username)->withCount('bookmarks')->first();
        }
        $entity->posts = $entity->posts()->latest()->paginate(8)->appends(request()->query());
        return $entity;
    }
    //

}
