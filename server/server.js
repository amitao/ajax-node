// bring express in from node modules
// syntax: const moduleName = require('moduleName');
// syntax: require('strings')
const express = require('express');
const getQuote = require('./modules/quotes.module');
// app will return express
const app = express();


// port that server listens to
const PORT = 5000;


app.use(express.static('server/public'));
// get syntax: get('route', function callback)
// function callback syntax: function(request, respond){}
// per request one respond back
app.get('/quote', function(req, res){

  res.send(getQuote());
});


// start out server on PORT
// syntax: listen(port, function callback)
app.listen(PORT, function(){
  console.log(`app has started on port ${PORT}`);
})