var express = require('express');
var app = express();
var path = require("path");

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.sendFile(path.join(__dirname+'/views/index.html'));
})

app.get('/Header.css', function(req, res) {
  res.sendFile(__dirname + "/" + "public/css/Header.css");
});

app.use(express.static(__dirname));

var server = app.listen(8081, function () {
   console.log("Example app listening at http://%s:%s")
})

