(function() {
  var placesAutocomplete = places({
    appId: 'plD5OC1Z23B2',
    apiKey: 'cc06b9a5fe1f04911a58d9d2274c47b5',
    container: document.querySelector('#city'),
    templates: {
      value: function(suggestion) {
        console.log(suggestion);
        return suggestion.name;
      }
    }
  }).configure({
    type: 'city',
    aroundLatLngViaIP: false
  });
})();

(function() {
  // Select the elements
  const city = document.querySelector('#city');
  console.log(CustomElementRegistry);
})();
