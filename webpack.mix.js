let mix = require('laravel-mix');

mix
	.scripts('js/*.js', 'builded/js/main.js')
	.styles('css/*.css','builded/css/main.css');

	//.js('js/main.js', 'builded/main.js')
	//.sass('sass/app.scss', 'builded/css');
