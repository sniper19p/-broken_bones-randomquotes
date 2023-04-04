const axios = require('axios');

function getrandomquotes() {
  return axios.get('https://type.fit/api/quotes')
    .then(response => {
      const quotes = response.data;
      return quotes;
    })
    .catch(error => {
      console.error(error);
    });
}

module.exports = { getrandomquotes };

