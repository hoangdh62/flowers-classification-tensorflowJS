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

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.post('/process', function (req, res) {
//   var filename = path.basename(req.params.filename);
//   filename = path.resolve(__dirname, filename);
//   var dst = fs.createWriteStream(filename);
//   req.pipe(dst);
  res.sendFile(req.file)
});

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Website is Up on PORT %d and HOSTNAME %s !", PORT, app.get('env'));
	}
});

