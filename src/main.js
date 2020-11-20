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
    let code = $("#country").val().toUpperCase();

    getRates(userUSD, code);
    });
  });

async function getRates(userInput, code) {
  const response = await exchangeApi.getExchange();
  getElements(response, userInput, code);
}

function getElements(response, userInput, code) {
  if (response) {
    let convertedMoney = currencyCalc(response, userInput, code);
    if (convertedMoney.coun.indexOf(code + ":") != -1) {
      let i = convertedMoney.coun.indexOf(code + ":");
      $("#coun").html(`${convertedMoney.coun[i]}`);
      $("#dol").html(`${convertedMoney.dol[i]}`);
    } else {
      $("#errors").html(`ExchangeRate API does not support country code ${code}`)
    }
  } else {
    $("#errors").text(`There seems to be an issue with the request: ${response.message}`);
  }
}

// function clearField() {

// }