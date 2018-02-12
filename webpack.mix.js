let mix = require('laravel-mix');

mix.js('js/main.js', 'builded/js')
	.styles([
			'css/main.css',
			'css/main2.css',
		],
		'builded/main.css');
    // .sass('sass/app.scss', 'builded/css');
