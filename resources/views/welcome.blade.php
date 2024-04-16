<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <! — csrf token ->
		<meta name="csrf-token" content="{{ csrf_token() }}">

        <title>tosssme</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">
        <!-- <link rel="stylesheet" href="odometer-theme-default.css" /> -->
        <!-- <link href="{{ secure_asset('css/index.css') }}" rel="stylesheet"> -->
      
    </head>
    <body class="antialiased">

    <div id="app"></div>
			<noscript></noscript>

			<!--<script defer src="http://localhost:8000/js/app.js"></script>-->
			<script defer src="{{ secure_asset('js/app.js') }}"></script>
       
    </body>
</html>
