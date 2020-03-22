const axios = require("axios");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("herat", (error, geoData) => {
  if (error) {
    console.log(error);

    // No error accured getting geocode
  } else {
    forecast(geoData.lat, geoData.lng, (error, response) => {
      console.log(response.data);
    });
  }
});
