let express = require('express');
let router = express.Router();

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'boredapi.com/api/activity?type=recreational',
  'headers': {
  }
};

request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});

router.get('/', function(req, res, next){
    let req1 = https.request(options, resp => {
        console.log(`statusCode: ${resp.statusCode}`)

        resp.on('data', d => {
            res.render('ps4', {title: 'Here\'s a recreational activity to do!', activity: JSON.parse(d.toString()).activity, price: JSON.parse(d.toString()).price})
        })
    })
});

module.exports(router);