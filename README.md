# Currency Exchange API 

#### **This program lets users see exchange rates for currency. Patrick Osten, 11/20/2020**

**[Click here to open github repository in web browser](https://github.com/POsten040/week-6-project)**

## Description

* Money comes in all colors and creeds, but how much of it exactly do you have? Enter an ammount of dollars to see the exchange rate for different countries. This program uses the [ExchangeRate API](https://www.exchangerate-api.com/docs/overview).
* Error messages will appear if the API call is faulty, or if the user input is faulty.

## Installation Requirements

- Up to date internet browser ([Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQjw28T8BRDbARIsAEOMBcy9jwgkNels1LOSIWTx4sDazLfEgC6PylTug62KqyWPeA0EMyr3254aAjTTEALw_wcB&gclsrc=aw.ds), [Mozilla](https://www.mozilla.org/en-US/firefox/), [Opera](https://www.opera.com/)).
 
- [Node.js](https://nodejs.org/en/download/)
 
 -**optional**- 
- Code editor like [VsCode](https://**Code**.visualstudio.com/download) to view source **Code**.

**Option 1** (download zip file)
1) Copy and paste the following GitHub project link into your web browser's url bar and hit enter/return. https://github.com/POsten040/week-6-project
2) Click the green "Code" button near the upper right corner of the screen.
3) Select "Download Zip" from the dropdown menu that appears upon "Code" button click.
4) From within your Downloads folder (or bar along the bottom of your browser), right click the .zip file and extract(unzip) its contents.
5) Open the unzipped folder/files using Visual Studio Code or similar source code editing program.
6) Install all required dependencies from the package.JSON folder, and then build the program.  To do this using Node Package Manager (npm), first navigate to the root directory of the project in your console.  You can then type the following commands to install and build the program.

    <code>npm install</code>

    <code>npm run build</code>

7) Once the code is built, a "dist/" directory will be created in the root directory of the project.  Launch the "index.html" file found here and it should open with your default web browser.
**Option 2** (via git console/terminal)
1) Open your Git enabled terminal/console and navigate to a directory that you wish to download this project to.
2) Type the following line of code into your terminal/console to automatically download the project to your current direcory and hit return/enter

    <code>git clone https://github.com/POsten040/week-6-project</code><br>

3) To take a look at this repository's files, navigate to the root directory of the project in the terminal/console, and type

    <code>code .</code> and then hit return/enter.

_The project should automatically launch using your default code editor._
4) Using the two terminal commands shown just below, npm will install all required dependencies from the package.JSON folder, and build the program. To use these npm commands, make sure your present working directory is the root folder of the project in your console. Here are the commands to install and build the program:

    <code>npm install</code>

    <code>npm run build</code>

5) Once the code is built, a "dist/" directory will be created in the root directory of the project.  Launch the "index.html" file found here, and it will open in your default web browser.

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