var express = require('express');
var _ = require('lodash');


var app = express();
var server = require('http').createServer(app);
var router = express.Router();
app.use('/api', router);

var redirectionList= [
  {uuid: '66219d0d-854a-4112-b8a6-0534b8d8421f', landingURL:'https://estimote.com'},
  {uuid: 'e639836e-7471-4414-949c-42e68fb05b0d', landingURL:'https://www.amazon.de'},
  {uuid: 'fee440ea-3f5d-425c-b4a5-d022068bc2ee', landingURL:'https://estimote.com'}
]

app.get('/:uuid', function(req, res){
  var redirectionObject = _.find(redirectionList, function(o){
      return o.uuid == req.params.uuid;
  });
  if (_.isUndefined(redirectionObject)) {
    return res.redirect('https://www.google.de/');
  }
  res.redirect(redirectionObject.landingURL);

});


var serverInstance = server.listen(5050, function() {var host = serverInstance.address().address; var port = serverInstance.address().port;	console.log('app listening at http://%s:%s', host, port);});
