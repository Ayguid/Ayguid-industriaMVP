<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Media;


class MediaController extends Controller
{
    //
    public function store(Request $request)
    {
        $file = $request->file('file');
        $file->store('media/' . $request->user()->id . '/' . now()->format('Y') . '/' . now()->format('m'), 'public');

        $media = Media::create([
            'filename' => $file->hashName(),
            'mime_type' => $file->getMimeType(),
            'size' => $file->getSize(),
            'user_id' => $request->user()->id
        ]);

        return response()->json([
            'id' => $media->id
        ]);
    }

    public function destroy(Media $media)
    {
        Storage::disk('public')
            ->delete('media/' . $media->user_id . '/' . now()->format('Y') . '/' . now()->format('m') . '/' . $media->filename);

        $media->delete();

        return response()->json([
            'message' => 'ok'
        ]);
    }
}
