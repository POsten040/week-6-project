export default function currecyCalc (response, userInput){
  let rates = response.conversion_rates;
  let obj = {coun:[], dol:[]};
  for (let [key, value] of Object.entries(rates)) {
    let val = `${value}` * userInput;
    obj.coun.push("<td>" + `${key}:` + "</td>");
    obj.dol.push("<td>" + val + "</td>");
  }
  return obj;
}
