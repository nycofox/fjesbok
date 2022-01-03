<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Tests\TestCase;

class RegisterUserTest extends TestCase
{
    /** @test */
    function a_user_can_register_an_account()
    {
        $this->assertDatabaseCount('users', 0);

        $this->post(route('register', $this->credentials()))
            ->assertSessionHasNoErrors();

        $this->assertDatabaseCount('users', 1);

        $this->assertDatabaseHas('users', ['username' => 'Username']);

        $this->assertAuthenticated();
    }

    /** @test */
    function an_email_must_be_unique_when_registering()
    {
        User::factory()->create(['email' => 'user@example.com']);

        $response = $this->post(route('register', $this->credentials()));

        $response->assertSessionHasErrors(['email']);
    }

    /** @test */
    function username_must_be_unique_when_registering()
    {
        User::factory()->create(['username' => 'Username']);

        $response = $this->post(route('register', $this->credentials()));

        $response->assertSessionHasErrors(['username']);
    }

    /** @test */
    function honeypot_replies_with_404()
    {
        // There's a hidden "name"-field on the form. It will only be filled out by bots,
        // which will display an 404 error

        $this->post(route('register', $this->credentials(['name' => 'Name'])))
            ->assertStatus(404);
    }

    private function credentials($override = array())
    {
        return array_merge([
            'first_name' => 'User',
            'last_name' => 'Name',
            'username' => 'Username',
            'email' => 'user@example.com',
            'password' => 'Password1234',
            'password_confirmation' => 'Password1234',
            'name' => '',
        ], $override);
    }
}
