var getWeather = function(city) {
 var apiUrl ="//api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=dbc0a62496177eb4a5dc2b08dde0d7c4&units=imperial";
 var apiUrl2 = "//api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=dbc0a62496177eb4a5dc2b08dde0d7c4&units=imperial "
 fetch(apiUrl).then(function(response) {
     response.json().then(function(data){
         console.log(data);
     })
 });
 fetch(apiUrl2).then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    });
});
};



getWeather("salt lake");