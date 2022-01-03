<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function show(User $user)
    {
        $threads = $user->threads()->with('user')->latest()->get();

        return view('user.profile', compact('user', 'threads'));
    }
}
