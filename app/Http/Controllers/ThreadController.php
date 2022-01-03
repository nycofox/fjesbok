<?php

namespace App\Http\Controllers;

use App\Models\Thread;
use Illuminate\Http\Request;

class ThreadController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'min:3']
        ]);

         auth()->user()->threads()->create(
             array_merge(
                 $request->only(['title']),
                 ['type' => 'te'],
             )
         );

         return redirect(route('home'));
    }
}
