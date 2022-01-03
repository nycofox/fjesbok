<?php

namespace Tests\Feature\Thread;

use App\Models\User;
use Tests\TestCase;

class CreateThreadTest extends TestCase
{
    /** @test */
    function a_user_can_create_a_thread()
    {
        $this->signIn();

        $this->post(route('thread'), [
            'title' => 'hei'
        ])
            ->assertSessionHasNoErrors();

        $this->assertDatabaseCount('threads', 1);

    }

    /** @test */
    function user_must_verify_email_before_creating_threads()
    {
        $user = User::factory()->create(['email_verified_at' => null]);

        $this->signIn($user);

        $this->post(route('thread'), [
            'title' => 'hei'
        ])->assertRedirect(route('verification.notice'));

        $this->assertDatabaseCount('threads', 0);

    }

    /** @test */
    function unauthenticated_guests_may_not_create_threads()
    {
        $this->post(route('thread'), [
            'title' => 'hei'
        ])->assertRedirect(route('login'));

        $this->assertDatabaseCount('threads', 0);
    }

    /** @test */
    function a_title_is_required_to_create_a_thread()
    {
        $this->signIn();

        $this->post(route('thread'), [
            'title' => ''
        ])
            ->assertSessionHasErrors(['title']);

        $this->assertDatabaseCount('threads', 0);
    }
}
