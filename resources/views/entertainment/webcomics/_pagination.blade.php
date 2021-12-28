<?php
$previous = $date->copy()->subDay()->format('Y-m-d');
$next = $date->copy()->addDay()->format('Y-m-d');
?>

<div class="pagination">
    <script type="text/javascript">
        shortcut.add("Left", function () {
            window.location.href = '{{ route('webcomics.show', $previous) }}';
        });
    </script>
    <div class="page-item me-auto">
        <a href="{{ route('webcomics.show', $previous) }}" class="page-link rounded-pill px-3">
            Previous ({{ $previous }})
        </a>
    </div>
    <div class="page-item me-auto">Tip, you can use left and right arrow keys to move between dates.</div>
    @if($date->isToday())
        <div class="page-item">
            <div class="page-link rounded-pill px-3">Today</div>
        </div>
    @else
        <script>
            shortcut.add("Right",function() {
                window.location.href = '{{ route('webcomics.show', $date->copy()->addDay()->format('Y-m-d')) }}';
            });
        </script>
        <div class="page-item">
            <a href="{{ route('webcomics.show', $next) }}" class="page-link rounded-pill px-3">
                Next ({{ $next }})
            </a>
        </div>
        <div class="page-item">
            <a href="{{ route('webcomics.show', date('Y-m-d')) }}" class="page-link rounded-pill px-3">
                Today
            </a>
        </div>
    @endif
</div>

@push('header-scripts')
    <script src="{{ asset('assets/js/shortcuts.js') }}"></script>
@endpush
