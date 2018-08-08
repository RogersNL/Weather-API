import { Weather } from './weather-interface';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    function showResults(response){
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Celsius is ${response.main.temp - 273}.`);
      $('.showWeather').text(`The weather in ${city} is ${response.weather[0].description}`);
    }
    function error(){
      $('#errors').text("There was an error processing your request. Please try again.");
    }
    $('#location').val("");
    Weather.getData(city, showResults, error);
  });
});
