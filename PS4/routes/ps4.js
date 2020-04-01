let express = require('express');
let router = express.Router();

const https = require('https');
const options = {
  hostname: 'www.boredapi.com',
  path: '/api/activity',
  method: 'GET',
  type: 'recreational'
};


router.get('/', function(req, res, next){
    const req1 = https.request(options, resp => {
        console.log(`statusCode: ${resp.statusCode}`)

        resp.on('data', d => {
            res.render('ps4', {title: 'Here\'s a recreational activity to do!', activity: JSON.parse(d.toString()).activity, price: JSON.parse(d.toString()).price})
        })
    })

    req1.on('error', error => {
      console.error(error)
  })
  
  req1.end()
});

module.exports = router;