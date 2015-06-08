var express = require('express'),
	app = express();

app
	.use(express.static('./public'))
	.get('*', function (req, res) {
		res.sendFile('index.html', {"root": "public"});
	})
	.listen(3000);
