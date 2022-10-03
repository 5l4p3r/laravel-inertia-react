<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function profile()
    {
        if(Auth::user())
        {
            return Inertia::render('Profile');
        }
        else
        {
            return redirect('/login');
        }
    }
}
