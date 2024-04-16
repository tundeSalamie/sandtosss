<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    // 'paths' => ['api/*', 'sanctum/csrf-cookie'],

    // 'allowed_methods' => ['*'],

    // 'allowed_origins' => ['*'],

    // 'allowed_origins_patterns' => [],

    // 'allowed_headers' => ['*'],

    // 'exposed_headers' => [],

    // 'max_age' => 0,

    // 'supports_credentials' => false,





    'paths' => ['api/*'],

    'allowed_methods' => [
        'PUT',
        'GET',
        'POST',
        'DELETE',
        'OPTIONS',
    ],

    
    'allowed_origins' => [
        '*'
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => [
        'Accept',
        'Authorization',
        'Content-Type',
        'Accept',
        'Origin',
        'Cache-Control',
        'Cookie',
        'DNT',
        'User-Agent',
        'X-Requested-With',
        'X-Custom-Header',
    ],

    'exposed_headers' => [
        'Accept',
        'Authorization',
        'Origin',
        'Content-Type',
        'X-Requested-With',
    ],

    'max_age' => '1728',

    'supports_credentials' => false,







];
