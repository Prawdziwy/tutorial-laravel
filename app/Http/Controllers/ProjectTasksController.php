<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Task;

class ProjectTasksController extends Controller
{
    public function store(Project $project) {
        $this->authorize('update', $project);

        request()->validate(['body' => 'required']);
        $project->addTask(request('body'));

        return redirect ($project->path());
    }

    public function update(Project $project, Task $task) {
        $this->authorize('update', $task->project);

        $task->update(['body' => request('body')]);

        if (request()->has('completed')) {
            $task->complete();
        }

        return redirect($project->path());
    }
}
