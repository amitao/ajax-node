// bring express in from node modules
const express = require('express');
// app will return express
const app = express();


// port that server listens to
const PORT = 5000;

// get syntax: get('route', function callback)
// function callback syntax: function(request, respond){}
app.get('/quote', function(req, res){
  res.send('got to quote');
});


// start out server on PORT
// syntax: listen(port, function callback)
app.listen(PORT, function(){
  console.log(`app has started on port ${PORT}`);
})