const axios = require("axios");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Los angless", (error, data) => {
  console.log(error);
  console.log(data);
});

forecast("37.8267", "-122.4233", (error, data) => {
  console.log(error);
  console.log(data);
});
