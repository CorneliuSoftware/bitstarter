var express = require('express');
var fs = require('fs');
var fileName = './index.html';
var txt="nothing";
try {
    var buf = fs.readFileSync(fileName);
    txt= buf.toString();
} catch (e) {
    txt=e.message;
}
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(txt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
