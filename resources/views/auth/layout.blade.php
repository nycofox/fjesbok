@extends('layouts.default', [
	'paceTop' => true,
	'appSidebarHide' => true,
	'appHeaderHide' => true,
	'appContentClass' => 'p-0'
])

@section('content')
    <div class="login login-v1">
        <!-- BEGIN login-container -->
        <div class="login-container">
            <!-- BEGIN login-header -->
            <div class="login-header">
                <div class="brand">
                    <div class="d-flex align-items-center">
                        <span class="logo"></span> <b>{{ config('app.name') }}</b>
                    </div>
                    <small>Catchphrase!</small>
                </div>
                <div class="icon">
                    <i class="fa fa-lock"></i>
                </div>
            </div>
            <!-- END login-header -->

            <!-- BEGIN login-body -->
            <div class="login-body">
                <!-- BEGIN login-content -->
                <div class="login-content fs-13px">
                    @yield('auth-content')
                </div>
                <!-- END login-content -->
            </div>
            <!-- END login-body -->
        </div>
        <!-- END login-container -->
    </div>
    <!-- END login -->

@endsection

