const PORT = process.env.PORT || 3000;
const HOSTNAME = '0.0.0.0';

// const express = require('express');
// const path = require('path');
// const cors = require('cors');

// let app = express();

// // Bypass CORS error
// // var whitelist = ['https://gogul09.github.io/models/mobilenet/model.json']
// var corsOptions = {
//   origin: '*'
// }

// // Cấu hình root mặc định.
// app.use(express.static(__dirname));

// app.get("/hello", cors(corsOptions), (req, res, next) => {
// 	// res.header("Access-Control-Allow-Origin", "https://0.0.0.0:5000"); // update to match the domain you will make the request from
//   	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// // 	res.sendFile(path.join(__dirname+"/index.html"));
// 	res.send("hello");
// // 	next();
// });

// app.listen(PORT, (err) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("Website is Up on PORT %d and HOSTNAME %s !", PORT, app.get('env'));
// 	}
// });

var express = require('express');
var app = express();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

app.post('/ay', upload.array('file', 12), function (req, res, next) {
    console.log(req.files)
    res.send("done");
});

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Website is Up on PORT %d and HOSTNAME %s !", PORT, app.get('env'));
	}
});

