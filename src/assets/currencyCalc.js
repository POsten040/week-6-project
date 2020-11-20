export default function currecyCalc (response, userInput){
  let rates = response.conversion_rates;
  for (const property in rates) {
    console.log(userInput * `${rates[property]}`)
  }
}