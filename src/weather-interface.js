export class Weather{
  constructor(){

  }
  static getData(query, hi, error){
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.API_KEY}`)
      .then(function(response){
        hi(response);
      }).fail(function(){
        error();
      });
    };
}
