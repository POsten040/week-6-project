export default function currencyCalc (response, userInput){
  let rates = response.conversion_rates;
  let obj = {coun:[], dol:[]};
  for (let [key, value] of Object.entries(rates)) {
    let val = `${value}` * userInput;
    obj.coun.push(`${key}:`);
    obj.dol.push(val);
  }
  return obj;
}
