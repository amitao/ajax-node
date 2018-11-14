$(document).ready(handleReady);

function handleReady() {
  console.log('jquery is ready');

  // click button
  $('#getQuote').on('click', handleClick);
  // call server
  // get a quote
  // append to DOM
  getQuote();
}

function getQuote() {
   // trigger a request
   $.ajax({
     //what kind of request and where its going
     method: 'GET',
     url: '/quote'
   }).then(function(response){
     console.log(response);
     $('#target').append(`<p>${response}</p>`);
   });
}

function handleClick() {
  getQuote();
}