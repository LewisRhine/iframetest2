var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
	res.setHeader('Set-Cookie',
		"dexcareSession=eyJ1; path=/; domain=.superbuddytime.com; samesite=none; secure; httponly")
	res.setHeader('Content-Security-Policy', 'frame-ancestors self file://*;')
	res.json({visitRedirectUrl:"https://iframetest-dev.superbuddytime.com"});

});

module.exports = router;
