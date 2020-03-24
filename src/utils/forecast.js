const axios = require('axios');

// weather forecast by providing address
const forecast = (lat, lng, callback) => {
  axios
    .get(
      `https://api.darksky.net/forecast/9c693d80dd58e2cc4d5f160ecb9ef15e/${lat},${lng}`
    )

    .then(response => {
      callback(undefined, response.data);
    })

    .catch(err => {
      if (err.response) {
        callback('Something went wrong with server. Try again later!');
      } else if (err.request) {
        callback('Unable to find location, Try another address!');
      } else {
        callback('Unable to find location, Try another address!');
      }
    });
};

module.exports = forecast;
