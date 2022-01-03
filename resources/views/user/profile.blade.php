@extends('layouts.default', ['appContentClass' => 'p-0'])

@section('title', $user->full_name)

@section('content')

    <div class="profile">
        <div class="profile-header">
            <div class="profile-header-cover"></div>
            <div class="profile-header-content">
                <div class="profile-header-img">
                    <img src="{{ $user->avatar_path }}" alt=""/>
                </div>
                <div class="profile-header-info">
                    <h4 class="mt-0 mb-1">{{ $user->full_name }}</h4>
                    <p class="mb-2">UXUI + Frontend Developer</p>
                    <a href="#" class="btn btn-xs btn-yellow">Edit Profile</a>
                </div>
            </div>
            <ul class="profile-header-tab nav nav-tabs">
                <li class="nav-item"><a href="#profile-post" class="nav-link active" data-bs-toggle="tab">POSTS</a></li>
                <li class="nav-item"><a href="#profile-about" class="nav-link" data-bs-toggle="tab">ABOUT</a></li>
                <li class="nav-item"><a href="#profile-photos" class="nav-link" data-bs-toggle="tab">PHOTOS</a></li>
                <li class="nav-item"><a href="#profile-videos" class="nav-link" data-bs-toggle="tab">VIDEOS</a></li>
                <li class="nav-item"><a href="#profile-friends" class="nav-link" data-bs-toggle="tab">FRIENDS</a></li>
            </ul>
        </div>
    </div>
    <div class="profile-content">
        <!-- BEGIN tab-content -->
        <div class="tab-content p-0">
            <!-- BEGIN #profile-post tab -->
            <div class="tab-pane fade show active" id="profile-post">
                <!-- BEGIN timeline -->
                <div class="timeline">
                    @foreach($threads as $thread)
                        @include('user._threadcard')
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection
