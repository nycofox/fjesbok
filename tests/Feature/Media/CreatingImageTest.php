<?php

namespace Tests\Feature\Media;

use App\Models\Image;
use Tests\TestCase;

class CreatingImageTest extends TestCase
{
    /** @test */
    function an_image_gets_an_uuid_when_created()
    {
        $image = Image::factory()->create();

        $this->assertNotEmpty($image->uuid);
    }
}
