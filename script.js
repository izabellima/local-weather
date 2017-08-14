$(document).ready(function() {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lon = parseFloat(position.coords.longitude).toFixed(2);
    var lat = parseFloat(position.coords.latitude).toFixed(2);
    var jsonaddress = "https://fcc-weather-api.glitch.me/api/current?lon=" + lon + "&lat=" + lat;
    $.getJSON(jsonaddress, function(data) {
      var tempC = Math.round(data.main.temp);
      var tempF = Math.round(tempC * 1.8 + 32);
      var tempUnit = "C";
      $("#location").html(data.name);
      $("#temperature").html(tempC + '°C');
      $("#icon").html("<img src=" + data.weather[0].icon + ">")
      $("#unit").on("click", function() {
        if (tempUnit == "C") {
          $("#temperature").html(tempF + '°F');
          tempUnit = "F";
        } else {
          $("#temperature").html(tempC + '°C');
          tempUnit = "C"
        } console.log(tempUnit);
      });


    });
  });
};
});


