<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Facades\Tests\Setup\ProjectFactory;
use App\Http\Controllers\ProjectTasksController;

class InvitationsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */

    function a_project_can_invite_a_user() {
        $project = ProjectFactory::create();

        $project->invite($newUser = User::class::factory()->create());

        $this
            ->actingAs($newUser)
            ->post(action([ProjectTasksController::class, 'store'], $project), $task = ['body' => 'Foo task']);

        $this->assertDatabaseHas('tasks', $task);
    }
}
