<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function path() {
        return "/projects/{$this->id}";
    }

    protected static function newFactory() {
        return \Database\Factories\ProjectFactory::new();
    }
}
