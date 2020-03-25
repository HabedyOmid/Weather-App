(function() {
  const placesAutocomplete = places({
    appId: 'plD5OC1Z23B2',
    apiKey: 'cc06b9a5fe1f04911a58d9d2274c47b5',
    container: document.querySelector('#city')
  }).configure({
    type: 'city',
    aroundLatLngViaIP: false
  });

  // const $address = document.querySelector('#address-value');
  placesAutocomplete.on('change', data => {
    // $address.textContent = e.suggestion.value;

    const location = data.suggestion.value;
    const lat = data.suggestion.latlng.lat;
    const lng = data.suggestion.latlng.lng;
    let notice = document.getElementById('notice');
    let xhttp;

    // AJAX
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // document.getElementById('txtHint').innerHTML = this.responseText;
      } else {
        notice.style.display = 'block';
        notice.innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', `/weather?lat=${lat}&lng=${lng}`, true);
    xhttp.send();
  });

  placesAutocomplete.on('clear', () => {
    // $address.textContent = 'none';
  });

  // Select the elements
  const city = document.querySelector('#city');
  console.log(city);

  city.addEventListener('focusout', () => {
    // console.log('focus is out', lat);
  });
})();
