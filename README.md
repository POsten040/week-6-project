# Currency Exchange API 

#### **This program lets users see exchange rates for currency. Patrick Osten, 11/20/2020**

**[Click here to open github repository in web browser](https://github.com/POsten040/week-5-project)**

## Description

* Money comes in all colors and creeds, but how much of it exactly do you have? Enter an ammount of dollars to see the exchange rate for different countries. This program uses the [ExchangeRate API](https://www.exchangerate-api.com/docs/overview).
* Error messages will appear if the API call is faulty, or if the user input is faulty.

## Installation Requirements

- Up to date internet browser ([Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQjw28T8BRDbARIsAEOMBcy9jwgkNels1LOSIWTx4sDazLfEgC6PylTug62KqyWPeA0EMyr3254aAjTTEALw_wcB&gclsrc=aw.ds), [Mozilla](https://www.mozilla.org/en-US/firefox/), [Opera](https://www.opera.com/)).
 
- [Node.js](https://nodejs.org/en/download/)
 
 -**optional**- 
- Code editor like [VsCode](https://**Code**.visualstudio.com/download) to view source **Code**.

## Setup

1. Open GitBash/Bash, type 
: `git clone {https://github.com/POsten040/week-5-project}`
2. Visit [ExchangeRate](https://www.exchangerate-api.com/) to get an API key, there is a free and paid version.
3. Create an .env file in the root drectory of the project and save the API key in it like so: `API_KEY = {your key goes here without braces}`
4. From the root directory you can then type `npm run start` to launch the project in the browser.

## Specs

<table>
  <tr>
    <th>Test</th>
    <th>Input</th>
    <th>Output</th>
  <tr>
    <td>Should take user input and save it to a var</td>
    <td>$10</td>
    <td>userInput = $10</td>
  <tr>
    <td>Should call Exchange rate API</td>
    <td>call</td>
    <td>API.response</td>
  <tr>
    <td>Should parse currency info from the response and return dollar ammounts for different countries</td>
    <td>$10</td>
    <td>100 pesos, 100 rupees, e.c.t</td>
</table>

## Contact 
- posten.coding@gmail.com

## Technologies Used

- HTML5 language  
- CSS 
- Bootstrap
- Javascript
- JQuery
- Node.js
- Webpack
- Jest
- ExchangeRate API

## License

[MIT license](https://opensource.org/licenses/MIT)

## Copyright (c) 2020 **_Patrick Osten_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.