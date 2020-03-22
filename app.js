const axios = require("axios");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

forecast("-114.1395056", "32.6732956", (error, data) => {
  console.log(error);
  console.log(data);
});
