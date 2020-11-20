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
    getRates(userUSD);
    });
  });

async function getRates(userInput) {
  const response = await exchangeApi.getExchange();
  getElements(response, userInput);
}

function getElements(response, userInput) {
  if (response) {
    let convertedMoney = currencyCalc(response, userInput);
    $("#coun").html("<tr>" + convertedMoney.coun + "</tr>");
    $("#dol").html(convertedMoney.dol);
  } else {
    $("#errors").text(`There seems to be an issue with the request: ${response.message}`);
  }
}

// function clearField() {

// }