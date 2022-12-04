const express = require('express');
const fetch = require('node-fetch');
const app = express();
const cors = require('cors');
require('dotenv').config()

app.use(cors({
  credentials: true,
  origin: '*'
}));
const axios = require('axios');


// app.options('*', cors());

app.get('/', (req, res) => {
  
let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD', {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY,
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
  }
}).then(js => res.json(js));
  
  const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD"
  ;

  // let data = 'WOrking'


  // fetch(url,{headers: { 'X-CMC_PRO_API_KEY':process.env.MY_API_KEY }})
  //   .then((response) => {
  //     console.log("\\\\THIS IS RESPONSE AFTER FETCHING 20 LISTED JSON CRYPTO FROM COINMARKETCAP API \\\\")
  //     console.log(response);
      
  //     response.json()
      

  //   })
  //   .then((da) => {
  //     console.log("\\\\THIS IS RESPONSE CONVERTED INTP JS OBJECT W JSON DATA FETCHED FROM API \\\\")
  //     //console.log(da)
  //     //data =  JSON.stringify(da);
  //     console.log(da)
  //     res.json(da);
      
  //   }).then(r => res.send());

    
    });




app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
