(function() {
  const placesAutocomplete = places({
    appId: 'plD5OC1Z23B2',
    apiKey: 'cc06b9a5fe1f04911a58d9d2274c47b5',
    container: document.querySelector('#city')
  }).configure({
    type: 'city',
    aroundLatLngViaIP: false
  });

  // After new address is  set
  placesAutocomplete.on('change', data => {
    // $address.textContent = e.suggestion.value;

    const locationName = data.suggestion.name;
    const lat = data.suggestion.latlng.lat;
    const lng = data.suggestion.latlng.lng;
    let notice = document.getElementById('notice'),
      weather = document.getElementById('weather'),
      temperature = document.getElementById('temperature'),
      summary = document.getElementById('summary'),
      windSpeed = document.getElementById('windSpeed'),
      humidity = document.getElementById('humidity'),
      location = document.getElementById('location');

    // AJAX
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (!this.readyState == 4 && this.status == 200) {
        notice.style.display = 'block';
        weather.style.display = 'none';
        notice.innerHTML = this.responseText;
      }
      let data = JSON.parse(this.responseText);
      weather.style.display = 'flex';
      notice.style.display = 'none';
      temperature.innerHTML = data.temperature;
      summary.innerHTML = data.summary;
      windSpeed.innerHTML = data.windSpeed;
      humidity.innerHTML = data.humidity;
      location.innerHTML = locationName;
    };
    xhttp.open('GET', `/weather?lat=${lat}&lng=${lng}`, true);
    xhttp.send();
  });

  placesAutocomplete.on('clear', () => {
    // $address.textContent = 'none';
  });

  city.addEventListener('focusout', () => {
    // console.log('focus is out', lat);
  });
})();
