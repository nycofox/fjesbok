<div class="timeline-item">
    <!-- BEGIN timeline-time -->
    <div class="timeline-time">
        <span class="date">
            @if($thread->created_at->isToday())
                today
            @elseif($thread->created_at->isYesterday())
                yesterday
            @else
                {{ $thread->created_at->format('d M') }}
                @if(!$thread->created_at->isSameYear())
                    {{ $thread->created_at->format('Y') }}
                @endif
            @endif
        </span>
        <span class="time">{{ $thread->created_at->format('H:m') }}</span>
    </div>
    <!-- END timeline-time -->
    <!-- BEGIN timeline-icon -->
    <div class="timeline-icon">
        <a href="javascript:;">&nbsp;</a>
    </div>
    <div class="timeline-content">
        <!-- BEGIN timeline-header -->
        <div class="timeline-header">
            <div class="userimage"><img src="{{ $thread->user->avatar_path }}" alt=""/></div>
            <div class="username">
                <a href="javascript:;">{{ $thread->user->full_name }} <i class="fa fa-check-circle text-blue ms-1"></i></a>
                <div class="text-muted fs-12px">{{ $thread->created_at->diffForHumans() }} <i
                        class="fa fa-globe-americas opacity-5 ms-1"></i></div>
            </div>
            <div>
                <a href="#"
                   class="btn btn-lg border-0 rounded-pill w-40px h-40px p-0 d-flex align-items-center justify-content-center"
                   data-bs-toggle="dropdown">
                    <i class="fa fa-ellipsis-h text-gray-600"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                    <a href="#" class="dropdown-item d-flex align-items-center">
                        <i class="fa fa-fw fa-bookmark fa-lg"></i>
                        <div class="flex-1 ps-1">
                            <div>Save Post</div>
                            <div class="mt-n1 text-gray-500"><small>Add this to your saved items</small></div>
                        </div>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item"><i class="fa fa-fw fa-edit fa-lg me-1"></i> Edit post</a>
                    <a href="#" class="dropdown-item"><i class="fa fa-fw fa-user fa-lg me-1"></i> Edit audience</a>
                    <a href="#" class="dropdown-item"><i class="fa fa-fw fa-bell fa-lg me-1"></i> Turn off notifications
                        for
                        this post</a>
                    <a href="#" class="dropdown-item"><i class="fa fa-fw fa-language fa-lg me-1"></i> Turn off
                        translations</a>
                    <a href="#" class="dropdown-item"><i class="fa fa-fw fa-calendar-alt fa-lg me-1"></i> Turn date</a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item"><i class="fa fa-fw fa-archive fa-lg me-1"></i> Move to archive</a>
                    <a href="#" class="dropdown-item"><i class="fa fa-fw fa-trash-alt fa-lg me-1"></i> Move to Recycle
                        bin</a>
                </div>
            </div>
        </div>
        <div class="timeline-body">
            <!-- timeline-post -->
            <div class="mb-3">
                <div class="mb-2">
                    <h3>{{ $thread->title }}</h3>
                    {{ $thread->body }}
                </div>
            </div>

            <!-- timeline-stats -->
            <div class="d-flex align-items-center text-dark mb-2">
                <div class="d-flex align-items-center">
												<span class="fa-stack fs-10px">
													<i class="fa fa-circle fa-stack-2x text-danger"></i>
													<i class="fa fa-heart fa-stack-1x fa-inverse fs-11px"></i>
												</span>
                    <span class="fa-stack fs-10px">
													<i class="fa fa-circle fa-stack-2x text-blue"></i>
													<i class="fa fa-thumbs-up fa-stack-1x fa-inverse fs-11px bottom-0 mb-1px"></i>
												</span>
                    <span class="ms-1">4.3k</span>
                </div>
                <div class="d-flex align-items-center ms-auto">
                    <div>259 Shares</div>
                    <div class="ms-3">21 Comments</div>
                </div>
            </div>

            <!-- timeline-action -->
            <hr class="my-10px"/>
            <div class="d-flex align-items-center fw-bold">
                <a href="javascript:;" class="flex-fill text-decoration-none text-center text-gray-600">
                    <i class="fa fa-thumbs-up fa-fw me-3px"></i> Like
                </a>
                <a href="javascript:;" class="flex-fill text-decoration-none text-center text-gray-600">
                    <i class="fa fa-comments fa-fw me-3px"></i> Comment
                </a>
                <a href="javascript:;" class="flex-fill text-decoration-none text-center text-gray-600">
                    <i class="fa fa-share fa-fw me-3px"></i> Share
                </a>
            </div>
            <hr class="mt-10px mb-3"/>

            <!-- timeline-input -->
            <form action="" class="d-flex align-items-center">
                <div><img src="../assets/img/user/user-13.jpg" height="35" class="rounded-pill"/></div>
                <div class="ps-2 flex-1">
                    <div class="position-relative">
                        <input type="text" class="form-control rounded-pill ps-3 py-2 fs-13px bg-light"
                               placeholder="Write a comment..."/>
                        <div class="position-absolute end-0 top-0 bottom-0 d-flex align-items-center px-2">
                            <a href="#" class="btn bg-none text-gray-600 shadow-none px-1"><i
                                    class="far fa-smile fa-fw fa-lg d-block"></i></a>
                            <a href="#" class="btn bg-none text-gray-600 shadow-none px-1"><i
                                    class="fa fa-camera fa-fw fa-lg d-block"></i></a>
                            <a href="#" class="btn bg-none text-gray-600 shadow-none px-1"><i
                                    class="fa fa-film fa-fw fa-lg d-block"></i></a>
                            <a href="#" class="btn bg-none text-gray-600 shadow-none px-1"><i
                                    class="far fa-sticky-note fa-fw fa-lg d-block"></i></a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
