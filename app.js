const path = require('path');
const express = require('express');
const hbs = require('hbs');
const axios = require('axios');
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

// Homepage
app.get('', (req, res) => {
  forecast('29.7589', '-95.3677', (error, data) => {
    if (error) {
      return res.render('index', { error });
    }

    return res.render('index', {
      temperature: Math.round(data.currently.temperature),
      humidity: data.currently.humidity * 100 + '%',
      summary: data.currently.summary,
      windSpeed: Math.round(data.currently.windSpeed) + 'KM'
    });
  });
});

// AJAX Search weather
app.get('/weather', (req, res) => {
  forecast(req.query.lat, req.query.lng, (error, data) => {
    if (error) {
      return res.send(error);
    }

    return res.send({
      temperature: Math.round(data.currently.temperature),
      humidity: data.currently.humidity * 100 + '%',
      summary: data.currently.summary,
      windSpeed: Math.round(data.currently.windSpeed) + 'KM'
    });
  });
});

// 404 Page
app.get('*', (req, res) => {
  res.render('404', {
    title: 'Page not found!'
  });
});

// Start the server
app.listen(4000, () => {
  console.log('server started...');
});
