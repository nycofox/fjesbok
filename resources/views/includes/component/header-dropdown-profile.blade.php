<div class="dropdown-menu dropdown-menu-end me-1">
	<a href="{{ route('profile.show', auth()->user()) }}" class="dropdown-item">View Profile</a>
{{--	<a href="javascript:;" class="dropdown-item d-flex align-items-center">--}}
{{--		Inbox--}}
{{--		<span class="badge bg-danger rounded-pill ms-auto pb-4px">2</span>--}}
{{--	</a>--}}
{{--	<a href="javascript:;" class="dropdown-item">Calendar</a>--}}
	<a href="javascript:;" class="dropdown-item">Settings</a>
	<div class="dropdown-divider"></div>
    <form method="POST" action="{{ route('logout') }}">
        @csrf
        <a href="{{ route('logout') }}"
           onclick="event.preventDefault(); this.closest('form').submit();"
           class="dropdown-item">
            Sign out</a>
    </form>
</div>
