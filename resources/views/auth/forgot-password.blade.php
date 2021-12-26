@extends('auth.layout')

@section('title', 'Login Page')

@section('auth-content')
    <form action="#" method="POST">
        @csrf
        <div class="mb-20px">
            <strong>To reset your password, please enter your email below.</strong>
        </div>
        <div class="form-floating mb-20px">
            <input name="email" type="email" class="form-control fs-13px h-45px" id="emailAddress"
                   placeholder="Email Address" value="{{ old('email') }}"/>
            <label for="emailAddress" class="d-flex align-items-center py-0">Email Address</label>
        </div>
        <div class="login-buttons">
            <button type="submit" class="btn h-45px btn-success d-block w-100 btn-lg">Send reset email
            </button>
        </div>
    </form>
    <div class="form-check mt-20px">
        Remember your password? Click <a href="{{ route('login') }}">here</a> to log in.
    </div>
@endsection
