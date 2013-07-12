var express = require('express');
var fs = require('fs');
var fileName = './index.html';
var textString = fs.readFileSync(fileName,'utf8');
var t2= "Hello 2";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(t2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
