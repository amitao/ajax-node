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


module.exports = getQuote;