@extends('layouts.default')

@section('title', 'Webcomics for ' . $date->format('Y-m-d'))

@section('content')
    <h1 class="page-header">Webcomics <small>for {{ $date->format('Y-m-d') }}</small></h1>

    @forelse($webcomics['strips'] as $webcomic)
        <div class="panel panel-inverse">
            <div class="panel-heading">
                <h4 class="panel-title">{{ $webcomic[0]['source']['webcomic']['name'] }}</h4>
            </div>
            <div class="panel-body">
                @foreach($webcomic as $strip)
                    <div class="mb-2">
                        <img src="{{ $strip['url'] }}" class="img-fluid">
                        <div class="flex justify-between">
                            <span class="text-xs pl-1">
                                <a href="{{ deref_url($strip['source']['homepage']) }}">{{ $strip['source']['name'] }}</a>
                            </span>
                            <span></span>
                        </div>
                    </div>

                @endforeach
            </div>
        </div>
    @empty
        <p>No strips today...</p>
    @endforelse
    @include('entertainment.webcomics._pagination')
@endsection
