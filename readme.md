# Random Quotes API

A simple Node.js module to retrieve random quotes from the Type Fit Quotes API, using Axios for HTTP requests.

## Installation

Install the module with npm:

```npm install @broken_bones/randomquotes``````

## Usage

Require the module and call the `getRandomQuotes` function:

```const quote = require("@broken_bones/randomquotes");

quote.getRandomQuotes()
  .then(quotes => {
    console.log(quotes);
  })
  .catch(error => {
    console.error(error);
  });
  ```

This will log an array of quotes to the console.

## License

This project is licensed under the ISC License. See the LICENSE file for details.
