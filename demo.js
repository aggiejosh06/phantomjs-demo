var webpage = require('webpage').create();

webpage.open('index.html', function() {
	webpage.render('webpage.pdf');
	phantom.exit();
})