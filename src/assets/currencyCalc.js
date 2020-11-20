export default function currecyCalc (response, userInput){
  let rates = response.conversion_rates;
  for (const property in rates) {
    let result = userInput * `${rates[property]}`;
    return (`${property}: ${result}`);
  }
}