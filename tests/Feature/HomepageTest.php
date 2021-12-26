<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class HomepageTest extends TestCase
{
    /** @test */
    function homepage_redirects_to_login()
    {
        $response = $this->get('/');

        $response->assertRedirect(route('login'));
    }

    /** @test */
    function the_register_page_can_be_seen_by_guests()
    {
        $response = $this->get(route('register'));

        $response->assertStatus(200);
    }
}
