var webPage = require('webpage');
var page = webPage.create();

page.paperSize = {
	width: '8.5in',
	height: '11in',
	margin: {
		top: '0.5in',
		left: '0.5in',
		right: '0.5in',
		bottom: '0.5in'
	}
};

page.open('http://128.194.188.174:8080', function() {
	page.render('webpage.pdf');
	phantom.exit();
});