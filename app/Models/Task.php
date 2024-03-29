<?php

namespace App\Models;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use RecordsActivity;
    use HasFactory;
    protected $guarded = [];

    protected $touches = ['project'];

    public function project() {
        return $this->belongsTo(Project::class);
    }

    public function path() {
        return "/projects/{$this->project->id}/tasks/{$this->id}";
    }

    protected $casts = [
        'completed' => 'boolean'
    ];

    protected static $recordableEvents = ['created', 'deleted'];

    public function complete() {
        $this->update(['completed' => true]);

        $this->recordActivity('completed_task');
    }

    public function incomplete() {
        $this->update(['completed' => false]);

        $this->recordActivity('incompleted_task');
    }
}
