<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
//use Illuminate\Database\Relations\MorphTo;

class Media extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $appends = ['full_url'];


    public function model()
    {
        return $this->morphTo();
    }

    public function getFullUrlAttribute()
    {
        # code...
        return url('storage/media/' . $this->user_id . '/' . $this->created_at->format('Y') . '/' . $this->created_at->format('m') . '/' . $this->filename);
    }
}
