<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Resources\User\UserCollection;

class UserController extends Controller
{
    public function __construct()
    {
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        $per_page = 15;
        if ($request->has('per_page')) {
            $per_page = $request->input('per_page');
        }

        $users = (new UserCollection(
            User::paginate($per_page)
        ));

        return Inertia::render('Users/Index', [
            'users' => $users
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function simple(Request $request)
    {
        $per_page = 15;
        if ($request->has('per_page')) {
            $per_page = $request->input('per_page');
        }

        $users = (new UserCollection(
            User::simplePaginate($per_page)
        ));

        return Inertia::render('Users/Simple', [
            'users' => $users
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function cursor(Request $request)
    {
        $per_page = 15;
        if ($request->has('per_page')) {
            $per_page = $request->input('per_page');
        }

        $users = (new UserCollection(
            User::cursorPaginate($per_page)
        ));

        return Inertia::render('Users/Cursor', [
            'users' => $users
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function cursorTope(Request $request)
    {
        $per_page = 15;
        if ($request->has('per_page')) {
            $per_page = $request->input('per_page');
        }

        $users = (new UserCollection(
            User::cursorPaginate($per_page)
        ));

        return Inertia::render('Users/CursorTope', [
            'users' => $users
        ]);
    }
}