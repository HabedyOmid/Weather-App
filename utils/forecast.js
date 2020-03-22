const axios = require("axios");

// weather forecast by providing address
const forecast = (lat, lng, callback) => {
  const url = `https://api.darksky.net/forecast/9c693d80dd58e2cc4d5f160ecb9ef15e/${lat},${lng}`;

  axios
    .get(url)
    .then(response => {
      callback(undefined, response);
    })
    .catch(error => {
      //   callback("Unable to get the forecast. Try again", undefined);
      callback(error);
    })
    .finally(() => {
      // always executed
    });
};

module.exports = forecast;
