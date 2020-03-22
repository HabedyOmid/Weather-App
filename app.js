const axios = require("axios");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Houston Tx", (error, { latitude, longitude, location }) => {
  if (error) {
    console.log(error);

    // No error accured getting geocode
  } else {
    forecast(latitude, longitude, (error, response) => {
      if (error) {
        console.log(error);
      } else {
        console.log(location);
        console.log(response.data);
      }
    });
  }
});
