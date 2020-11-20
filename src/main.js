import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";
import $ from "jquery";
import exchangeApi from './assets/exchangeApi.js';
import currencyCalc from './assets/currencyCalc.js';

$("document").ready(function(){
  $("#userInput").submit(function(event) {
    event.preventDefault();
    let userUSD = parseInt($("#currency").val());
    console.log(userUSD);
    let body = exchangeApi.getExchange();
    body.then(function(response) {
      console.log(response);
      currencyCalc(response, userUSD);
      getElements(response);
    })
  });
});
function getElements(response) {
  if (response) {
    $(".result").text(response)
  }
}

// function clearField() {

// }