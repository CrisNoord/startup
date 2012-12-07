
// Load site if media-queries are supported
yepnope({
	test: Modernizr.mq('only all'),
	nope: 'scripts/polyfill/css3-mediaqueries.js',

});

// Reuse your file reader adding a polyfill if not supported. 
yepnope({
	test: !!window.FileReader && Modernizr.draganddrop,
	nope: 'scripts/polyfill/jquery.FileReader.js',
	callback: function (url, result, key) {
    	console.log('Loaded: ' + url);
  	}
});