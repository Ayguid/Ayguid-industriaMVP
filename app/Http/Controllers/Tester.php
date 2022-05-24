<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Entity;
use App\Models\Location;
use App\Models\EntityCategory;
use App\Models\User;
use App\Models\UserBookmark;
use App\Support\Collection; //herramienta para paginear jsons
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Arr;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use DB;

class Tester extends Controller
{
    // controlador para chanchadas
    public function indexSeed()
    {
        //$contents = json_decode(Storage::get('materials.json'));
        //$this->nestedIterationMaterialsSeeder($contents);
        /*
        $parent_materials = Material::where('parent_id', null)->with('children')->get();

        return response()->json([
            'materials' => $parent_materials,
        ]);
        */
        $contents = json_decode(Storage::get('processes.json'));
        return $this->nestedIterationProcessesSeeder($contents);
    }


    public function nestedIterationMaterialsSeeder($collection, $id = null)
    {
        //busca si hay hijos y guarda una insancia nueva por cada hijo, Material class
        /*
        for ($i = 0; $i < count($collection); $i++) {
            $newMaterial = Material::create([
                'parent_id' => $id,
                'name' => $collection[$i]->label,
            ]);
            if (property_exists($collection[$i], 'children')) {
                $this->nestedIterationMaterialsSeeder($collection[$i]->children, $newMaterial->id);
            }
        }
        */
    }

    public function nestedIterationProcessesSeeder($collection, $id = null)
    {
        //busca si hay hijos y guarda una insancia nueva por cada hijo, Process class
        /*
        for ($i = 0; $i < count($collection); $i++) {
            $newProcess = Process::create([
                'parent_id' => $id,
                'name' => $collection[$i]->label,
            ]);
            if (property_exists($collection[$i], 'children')) {
                $this->nestedIterationProcessesSeeder($collection[$i]->children, $newProcess->id);
            }
        }
        */
    }

    public function flatten($input, $key)
    {
        $output = [];

        // For each object in the array
        foreach ($input as $object) {

            // separate its children
            $children = isset($object->$key) ? $object->$key : [];
            $object->$key = [];

            // and add it to the output array
            $output[] = $object;

            // Recursively flatten the array of children
            $children = $this->flatten($children, $key);

            //  and add the result to the output array
            foreach ($children as $child) {
                $output[] = $child;
            }
        }
        return $output;
    }




    //
    public function data(Request $request)
    {
        //$json = Storage::disk('local')->get('jsons/localidades.json');
        //return $collection = (new Collection(json_decode($json, true)['localidades']))->where("id", "06021010000")->paginate(10);
        //return Entity::where('id', 41)->first()->posts;
        $reso = Entity::where('id', 1)->first();
        return response($reso);
        /* crea el admin role
        $role = Role::create(['name' => 'superadmin']);
        $user = User::where('id', 1)->first();
        $user->assignRole($role);
        return;
        */
        // para buscar la localidad en el json de localidades por nombre de localidad, y pagineamos
        $queryParam = "Villa";
        $json = Storage::disk('local')->get('jsons/localidades.json');
        $collection = (new Collection(json_decode($json, true)['localidades']));
        $data = $collection->filter(function ($item) use ($queryParam) {
            // replace stristr,stripos,etc with your choice of matching function
            //buscamos los que tienen nombre parecido en la localidad o provincia
            return false !== stripos($item['nombre'], $queryParam) || false !== stripos($item['provincia']['nombre'], $queryParam);
        });
        return response($data->paginate(10), 200);
        /*

        return User::where('id', 1)->first()->bookmarks()->withCount([
            'bookmarks',
            'bookmarks as bookmarked' => function ($q) {
                $q->where('user_id', 1);
            }
        ])->withCasts(['bookmarks' => 'boolean'])->paginate();
        */
        //$entCat = Entity::where('id', 10)->first()->catPivots;
        //return Entity::where('id', 1)->get();
        //return $entCat;
        //$user = auth()->user()->categories;
        $userWithEntities = User::where('id', 10)->with(['entities.categories'])->get();
        //
        $catsArrayIds = [1, 48, 25];
        //
        $entitiesWithCats = Entity::whereHas('categories',  function ($query) use ($catsArrayIds) {
            return $query->whereIn('category_id', $catsArrayIds);
        })->with(['user', 'categories'])->get();
        //
        $catWithEntities = Category::where('id', 48)->with(['entities'])->get();
        //
        $data = [
            'userWithEntities' => $userWithEntities,
            'catIds' => $catsArrayIds,
            'entitiesWithCats' => $entitiesWithCats,
            'catWithEntities' => $catWithEntities
        ];
        //
        return response($data);
    }


    //


    public function seedLocations()
    {
        /*    
        return DB::transaction(function () {
            # code...
            $json = Storage::disk('local')->get('jsons/localidades.json');
            $collection = (new Collection(json_decode($json, true)['localidades']));

            $collection->each(function ($location) {
                $location =  Location::create([
                    "country_id" => 1,
                    "country_name" => "Argentina",
                    "state" => $location["provincia"]["nombre"],
                    "city" => $location["nombre"]
                ]);
            });
            return $collection;
        });
        */
    }
}
