"use strict";!function(){var e=places({appId:"plD5OC1Z23B2",apiKey:"cc06b9a5fe1f04911a58d9d2274c47b5",container:document.querySelector("#city")}).configure({type:"city",aroundLatLngViaIP:!1});e.on("change",function(e){var t=e.suggestion.name,n=e.suggestion.latlng.lat,a=e.suggestion.latlng.lng,i=document.querySelector(".placeholder"),o=document.getElementById("notice"),c=document.getElementById("weather"),s=document.getElementById("temperature"),d=document.getElementById("summary"),l=document.getElementById("windSpeed"),r=document.getElementById("humidity"),u=document.getElementById("location");i.style.display="block";var y=new XMLHttpRequest;y.onreadystatechange=function(){4==!this.readyState&&200==this.status&&(o.style.display="block",c.style.display="none",o.innerHTML=this.responseText);var e=JSON.parse(this.responseText);i.style.display="none",c.style.display="flex",o.style.display="none",s.innerHTML=e.temperature,d.innerHTML=e.summary,l.innerHTML=e.windSpeed,r.innerHTML=e.humidity,u.innerHTML=t},y.open("GET","/weather?lat=".concat(n,"&lng=").concat(a),!0),y.send()}),e.on("clear",function(){}),city.addEventListener("focusout",function(){})}();