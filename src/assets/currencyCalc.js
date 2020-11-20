export default function currecyCalc (response, userInput){
  let rates = response.conversion_rates;
  let obj = {code:[], dol:[]};
  for (let [key, value] of Object.entries(rates)) {
    let val = `${value}` * userInput;
    obj.code.push(`${key}:`);
    obj.dol.push(val);
  }
  return obj;
}
