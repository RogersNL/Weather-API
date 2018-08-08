$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Celsius is ${response.main.temp - 273}.`);
        $('.showWeather').text(`The weather in ${city} is ${response.weather[0].description}`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
