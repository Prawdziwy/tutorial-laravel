<?php

namespace App\Models;

use App\Models\Activity;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class Project extends Model
{
    use RecordsActivity;
    use HasFactory;
    protected $guarded = [];

    public function path() {
        return "/projects/{$this->id}";
    }

    public function owner() {
        return $this->belongsTo(User::class);
    }

    public function tasks() {
        return $this->hasMany(Task::class);
    }

    public function addTask($body) {
        return $this->tasks()->create(compact('body'));
    }

    protected static function newFactory() {
        return \Database\Factories\ProjectFactory::new();
    }
}
