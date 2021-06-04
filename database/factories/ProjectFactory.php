<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\User;

class ProjectFactory extends Factory
{
    use WithFaker;
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'owner_id' => function () {
                return User::class::factory()->create()->id;
            }
        ];
    }
}
