@extends('auth.layout')

@section('title', 'Login Page')

@section('auth-content')
    <div class="mb-20px text-danger">
        <strong>Either your email or password is incorrect, try again!</strong>
    </div>
    <form action="{{ route('login') }}" method="POST">
        @csrf
        <div class="form-floating mb-20px">
            <input name="email" type="email" class="form-control fs-13px h-45px" id="emailAddress"
                   placeholder="Email Address" value="{{ old('email') }}"/>
            <label for="emailAddress" class="d-flex align-items-center py-0">Email Address</label>
        </div>
        <div class="form-floating mb-20px">
            <input name="password" type="password" class="form-control fs-13px h-45px" id="password"
                   placeholder="Password"/>
            <label for="password" class="d-flex align-items-center py-0">Password</label>
        </div>
        <div class="form-check mb-20px">
            <input class="form-check-input" name="remember" type="checkbox" value="" id="rememberMe"/>
            <label class="form-check-label" for="rememberMe">
                Remember Me
            </label>
        </div>
        <div class="login-buttons">
            <button type="submit" class="btn h-45px btn-success d-block w-100 btn-lg">Sign me in
            </button>
        </div>
    </form>
    <div class="form-check mt-20px">
        Forgot your password? Click <a href="{{ route('password.request') }}">here</a> to reset it.
    </div>
    <div class="form-check mt-20px">
        Need an account? You can <a href="{{ route('register') }}">register</a> for the site.
    </div>
@endsection
