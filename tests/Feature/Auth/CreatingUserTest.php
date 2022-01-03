<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Tests\TestCase;

class CreatingUserTest extends TestCase
{
    /** @test */
    function a_user_is_assigned_a_uuid_when_created()
    {
        $user = User::factory()->create();

        $this->assertNotNull($user->uuid);
    }
}
