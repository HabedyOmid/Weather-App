const path = require('path');
const express = require('express');
const hbs = require('hbs');

const axios = require('axios');
const geocode = require('./src/utils/geocode');
const forecast = require('./src/utils/forecast');

// Initialize express
const app = express();

// Setup path for express config
const publicPath = path.join(__dirname, '/public');
const viewsPath = path.join(__dirname, '/templates/views');
const partialPath = path.join(__dirname, '/templates/partials');

// Setup handerbars engine and views
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

// Setup static directory
app.use(express.static(publicPath));

// App routes
app.get('', (req, res) => {
  res.render('index', {
    title: 'home'
  });
});

// 404 Page
app.get('*', (req, res) => {
  res.render('404', {
    title: 'Page not found!'
  });
});

// Start the server
app.listen(3000, () => {
  console.log('server started...');
});

// geocode('Houston Tx', (error, { latitude, longitude, location }) => {
//   if (error) {
//     console.log(error);

//     // No error accured getting geocode
//   } else {
//     forecast(latitude, longitude, (error, response) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(location);
//         console.log(response.data);
//       }
//     });
//   }
// });
