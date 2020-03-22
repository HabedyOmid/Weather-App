const axios = require("axios");
const geocode = require("./utils/geocode");

// Send GET request

axios
  .get(`https://api.darksky.net/forecast/${dark_key}/${lat},${lng}`)

  .then(function(res) {
    //console.log(res);
  })
  .catch(function(err) {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(`Unable to find location: ${err.response.status}`);
    } else if (err.request) {
      // The request was made but no response was received
      // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(err.request);
    } else {
      // Something happened in setting up the request that triggered an err
      console.log("Error", err.message);
    }
  });

geocode("Los angless", (err, data) => {
  console.log(err);
  console.log(data);
});
