const axios = require('axios');

async function getRandomQuotes(apiUrl = 'https://type.fit/api/quotes') {
  try {
    const response = await axios.get(apiUrl);
    const quotes = response.data;
    return quotes;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { getRandomQuotes };