
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

   
   
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
