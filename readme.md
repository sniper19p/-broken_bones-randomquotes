# Random Quotes API

This is a simple Node.js module to retrieve random quotes from the Type Fit Quotes API. It utilizes the Axios library to make an HTTP GET request to the API and returns an array of quotes.

## Installation

To use this module, first install it using npm:

```sh
npm i @broken_bones/randomquotes
```
## Usage
To use this module in your Node.js project, require it and call the getDailyQuestions function:
```sh
const quote = require("@broken_bones/randomquotes");

quote.getrandomquotes()
  .then(quotes => {
    console.log(quotes);
  })
  .catch(error => {
    console.error(error);
  });

  ```
This will log an array of quotes to the console.


## License
This project is licensed under the ISC License - see the LICENSE file for details.

