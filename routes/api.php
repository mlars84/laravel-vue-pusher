<?php

Route::apiResource([
    '/question', 'QuestionController',
    '/category', 'CategoryController',
    '/reply', 'ReplyController'
]);
