(function() {
  const placesAutocomplete = places({
    appId: 'plD5OC1Z23B2',
    apiKey: 'cc06b9a5fe1f04911a58d9d2274c47b5',
    container: document.querySelector('#city')
  }).configure({
    type: 'city',
    aroundLatLngViaIP: false
  });

  // After new address is set
  placesAutocomplete.on('change', data => {
    const locationName = data.suggestion.name;
    const lat = data.suggestion.latlng.lat;
    const lng = data.suggestion.latlng.lng;
    let placeholder = document.querySelector('.placeholder'),
      notice = document.getElementById('notice'),
      weather = document.getElementById('weather'),
      temperature = document.getElementById('temperature'),
      summary = document.getElementById('summary'),
      windSpeed = document.getElementById('windSpeed'),
      humidity = document.getElementById('humidity'),
      location = document.getElementById('location');
      placeholder.style.display = 'block';

    // Send AJAX Request
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

      // There is error
      if (!this.readyState == 4 && this.status == 200) {
        notice.style.display = 'block';
        weather.style.display = 'none';
        notice.innerHTML = this.responseText;
      }

      // Success 
      if(this.responseText){
        const forecast = JSON.parse(this.responseText);

        placeholder.style.display = 'none';
        weather.style.display = 'flex';
        notice.style.display = 'none';
        temperature.innerHTML = forecast.temperature;
        summary.innerHTML = forecast.summary;
        windSpeed.innerHTML = forecast.windSpeed;
        humidity.innerHTML = forecast.humidity;
        location.innerHTML = locationName;
      }
    }
    xhttp.open('GET', `/weather?lat=${lat}&lng=${lng}`, true);
    xhttp.send();
  });

  placesAutocomplete.on('clear', () => { });

  city.addEventListener('focusout', () => {});
})();
