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
const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer();

app.post('/profile', upload.array(), function (req, res, next) {
	res.send("success")
});

app.get("/hello", function (req, res, next) => {
	res.send("hello");
});
