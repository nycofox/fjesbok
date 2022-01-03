<?php

namespace Tests\Feature\Thread;

use App\Models\Thread;
use Tests\TestCase;

class ViewThreadTest extends TestCase
{
    /** @test */
    function a_thread_can_be_seen_at_a_users_profile_page()
    {
        $thread = Thread::factory()->create();

        $this->signIn();

        $response = $this->get(route('profile.show', $thread->user));

        $response->assertSee($thread->title);
    }
}
