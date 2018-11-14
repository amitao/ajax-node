// bring express in from node modules
const express = require('express');
// app will return express
const app = express();


// port that server listens to
const PORT = 5000;

let quote = ['Work is the curse of the drinking class',
              'The only thing to fear is fear itself',
              `fool me once, shame on me, but teach a man to fool me and...`];

// return one quote not the same every time
let index = 0;
function getQuote(){

  let quoteToReturn = quote[index];
  // increment by 1
  index += 1;

  // keep our quote inbounds
  if(index >= quote.length){
    //reset index back to zero
    index = 0;
  }
  return quoteToReturn;
}



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