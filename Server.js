var fetch = require("node-fetch");
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function (req, res) {
    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD&CMC_PRO_API_KEY=59061bf5-18f0-4604-8f07-0fef5bbed287')
  .then((response) => response.json())
  .then((data) => res.json(data));

   
   
})

var server = app.listen(8081, function () {
    
    console.log("server working");
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
})
