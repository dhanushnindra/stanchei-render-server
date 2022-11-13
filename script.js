const express = require('express');
const fetch = require('node-fetch');
const app = express();
const cors = require('cors');

app.use(cors({
  credentials: true,
  origin: '*'
}));

// app.options('*', cors());

app.get('/', (req, res) => {
  
  const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD&CMC_PRO_API_KEY=59061bf5-18f0-4604-8f07-0fef5bbed287"
  ;

  let data = 'WOrking'


  fetch(url)
    .then((response) => {
      console.log("\\\\THIS IS RESPONSE AFTER FETCHING 20 LISTED JSON CRYPTO FROM COINMARKETCAP API \\\\")
      //console.log(response);
      
      response.json()
      

    })
    .then((da) => {
      console.log("\\\\THIS IS RESPONSE CONVERTED INTP JS OBJECT W JSON DATA FETCHED FROM API \\\\")
      //console.log(da)
      //data =  JSON.stringify(da);
      console.log(da)
      res.json(da);
      
    }).then(r => res.send());

    
    });




app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
