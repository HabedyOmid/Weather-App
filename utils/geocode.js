const axios = require("axios");

// Convert address to Latitude & Longitude
const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZGV2Y3J1ZCIsImEiOiJjazgzZjNjb2YwbzZnM2xtdDNuM2N6a3B4In0.e3VE-BS_ESN_zdPEIA89XA`;

  axios
    .get(url)

    .then(function(res) {
      callback(undefined, {
        location: res.data.features[0].place_name,
        lat: res.data.features[0].center[0],
        lng: res.data.features[0].center[1]
      });
    })
    .catch(function(err) {
      callback("Unable to find location. Try another search.", undefined);
    });
};

module.exports = geocode;
