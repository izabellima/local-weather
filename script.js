// $(document).ready(function() {
//   if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     var lon = parseFloat(position.coords.longitude).toFixed(2);
//     var lat = parseFloat(position.coords.latitude).toFixed(2);
//     var jsonaddress = "https://fcc-weather-api.glitch.me/api/current?lon=" + lon + "&lat=" + lat;
//     $.getJSON(jsonaddress, function(data) {
//     console.log(data.weather[0].main);
//     console.log(data.main.temp);
//     console.log(data.weather[0].icon);
//     console.log(data.name);
//     });
//   });
// };
// });


