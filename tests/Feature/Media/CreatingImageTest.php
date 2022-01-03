<?php

namespace Tests\Feature\Media;

use App\Models\Image;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CreatingImageTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    function an_image_gets_an_uuid_when_created()
    {
        $image = Image::factory()->create();

        $this->assertNotEmpty($image->uuid);
    }
}
