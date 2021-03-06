<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IsSuperAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        if (Auth::user() &&  Auth::user()->hasRole('super-admin')) {
            return $next($request);
        }
        /*
        if ($request->user() &&  $request->user()->hasRole('super-admin')) {
            return $next($request);
        }*/
        //else
        return response('Unauthorized.', 401);
    }
}
