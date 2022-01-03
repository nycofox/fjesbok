@extends('layouts.default')

@section('title', $user->full_name)

@section('content')

    <h1 class="page-header">{{ $user->full_name }}</h1>

    @foreach($threads as $thread)
        <div>
            {{ $thread->title }}
        </div>
    @endforeach
@endsection
