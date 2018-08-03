<?php

namespace App\Http\Controllers;

use App\Model\Like;
use Illuminate\Http\Request;
use App\Model\Reply;

class LikeController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function likeIt(Reply $reply)
    {
        $reply->likes()->create(
            [
                // 'user_id' => Auth::id(),
                'user_id' => '1'
            ]
            );

        return response('Liked!', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Like  $like
     * @return \Illuminate\Http\Response
     */
    public function unLikeIt(Reply $reply)
    {
        $reply->likes()->where('user_id', '1')->first()->delete();

        return response('Unliked!', 204);
    }
}
