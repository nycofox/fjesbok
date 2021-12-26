@extends('layouts.default', [
	'paceTop' => true,
	'appSidebarHide' => true,
	'appHeaderHide' => true,
	'appContentClass' => 'p-0'
])

@section('title', 'Register Page')

@section('content')

    <!-- BEGIN register -->
    <div class="register register-with-news-feed">
        <!-- BEGIN news-feed -->
        <div class="news-feed">
            <div class="news-image" style="background-image: url({{ asset('images/bg-login.png') }})"></div>
            <div class="news-caption">
                <h4 class="caption-title"><b>{{ config('app.name') }}</b></h4>
                <p>
                    As a member of {{ config('app.name') }} you can post stories, share pictures or videos, follow your
                    friends or communicate with any other user.
                </p>
            </div>
        </div>
        <!-- END news-feed -->

        <!-- BEGIN register-container -->
        <div class="register-container">
            <!-- BEGIN register-header -->
            <div class="register-header mb-25px h1">
                <div class="mb-1">Sign Up</div>
                <small class="d-block fs-15px lh-16">Create your {{ config('app.name') }} Account. It’s free and always
                    will be. If you already have an account you can <a href="{{ route('login') }}">sign in</a> instead.
                </small>
            </div>
            <!-- END register-header -->

            <!-- BEGIN register-content -->
            <div class="register-content">
                <form action="{{ route('register') }}" method="POST" class="fs-13px" data-parsley-validate="true">
                    @csrf
                    <div class="mb-3">
                        <label class="mb-2">Name <span class="text-danger">*</span></label>
                        <div class="row gx-3">
                            <div class="col-md-6 mb-2 mb-md-0">
                                {{--                                <input type="text" class="form-control fs-13px" placeholder="First name"--}}
                                {{--                                       name="first_name" value="{{ old('first_name') }}" data-parsley-required="true"/>--}}
                                @include('includes.form.registerfield', [
                                    'name' => 'first_name',
                                    'placeholder' => 'First Name'
                                ])
                            </div>
                            <div class="col-md-6">
                                @include('includes.form.registerfield', [
                                    'name' => 'last_name',
                                    'placeholder' => 'Last Name'
                                ])
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="mb-2">Email <span class="text-danger">*</span></label>
                        @include('includes.form.registerfield', [
                                    'type' => 'email',
                                    'name' => 'email',
                                    'placeholder' => 'Email'
                                ])
                    </div>
                    <div class="mb-3">
                        <label class="mb-2">Username <span class="text-danger">*</span></label>
                        @include('includes.form.registerfield', [
                                    'name' => 'username',
                                    'placeholder' => 'Username'
                                ])
                    </div>
                    <div class="mb-4">
                        <label class="mb-2">Password <span class="text-danger">*</span></label>
                        @include('includes.form.registerfield', [
                                    'type' => 'password',
                                    'name' => 'password',
                                    'placeholder' => 'Password'
                                ])
                    </div>
                    <div class="mb-4">
                        <label class="mb-2">Confirm password <span class="text-danger">*</span></label>
                        @include('includes.form.registerfield', [
                                    'type' => 'password',
                                    'name' => 'password_confirmation',
                                    'placeholder' => 'Please confirm your password'
                                ])
                    </div>
                    <div class="form-check mb-4">
                        <input class="form-check-input" type="checkbox" value="" id="agreementCheckbox"/>
                        <label class="form-check-label" for="agreementCheckbox">
                            <p>By clicking Sign Up, you agree to our <a href="javascript:;">Terms</a> and that you have
                                read our <a href="javascript:;">Data Policy</a>, including our <a href="javascript:;">Cookie
                                    Use</a>.</p>
                            <p>(Just as a reminder: no cookies will ever be shared outside our domain, we're
                                both ad-free and private-centric. Your information is pretty safe with us!)</p>
                        </label>
                    </div>
                    <div style="display:none">
                        <input type="text" name="name" placeholder="Name">
                    </div>
                    <div class="mb-4">
                        <button type="submit" class="btn btn-primary d-block w-100 btn-lg h-45px fs-13px">Sign Up
                        </button>
                    </div>
                    <div class="mb-4 pb-5">
                        Already a member? Click <a href="{{ route('login') }}">here</a> to login.
                    </div>
                    <hr class="bg-gray-600 opacity-2"/>
                    <p class="text-center text-gray-600">
                        &copy; {{ config('app.name') }} All Right Reserved {{ date('Y') }}
                    </p>
                </form>
            </div>
            <!-- END register-content -->
        </div>
        <!-- END register-container -->
    </div>
    <!-- END register -->
@endsection

@push('header-scripts')
    <script src="{{ asset('/assets/plugins/parsleyjs/dist/parsley.min.js') }}"></script>
@endpush
