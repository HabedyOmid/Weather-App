"use strict";!function(){var e=places({appId:"plD5OC1Z23B2",apiKey:"cc06b9a5fe1f04911a58d9d2274c47b5",container:document.querySelector("#city")}).configure({type:"city",aroundLatLngViaIP:!1});e.on("change",function(e){var t=e.suggestion.name,n=e.suggestion.latlng.lat,i=e.suggestion.latlng.lng,a=document.getElementById("notice"),c=document.getElementById("temperature"),o=document.getElementById("summary"),s=document.getElementById("windSpeed"),d=document.getElementById("humidity"),r=document.getElementById("location"),u=new XMLHttpRequest;u.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);c.innerHTML=e.temperature,o.innerHTML=e.summary,s.innerHTML=e.windSpeed,d.innerHTML=e.humidity,r.innerHTML=t}else a.style.display="block",a.innerHTML=this.responseText},u.open("GET","/weather?lat=".concat(n,"&lng=").concat(i),!0),u.send()}),e.on("clear",function(){}),city.addEventListener("focusout",function(){})}();