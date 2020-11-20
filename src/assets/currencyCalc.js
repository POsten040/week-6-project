export default function currecyCalc (response, userInput){
  let rates = response.conversion_rates;
  let x = [];
  for (let [key, value] of Object.entries(rates)) {
    let val = `${value}` * userInput;
    x.push("<br>" + `${key}:` + val + "</br>");
  }
  return x;
}
