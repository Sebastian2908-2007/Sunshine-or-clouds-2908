


var printOneDay = function(weather) {
    var oneDay = document.querySelector("#one-day-forecast"); 
    oneDay.innerHTML = "<h2 class='col'>" + weather.name + "</h2> <span class='col-12'>temp:"+ " " + weather.main.temp +"</span> <span class='col-12'>wind:" + " " + weather.wind.speed +"</span> <span class='col-12'>humidity:"+ " " + weather.main.humidity +"</span> <span class='col-12'>low temp:"+ " " + weather.main.temp_min +"</span>"
    
};

var getWeather = function(city) {
 var apiUrl ="//api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=dbc0a62496177eb4a5dc2b08dde0d7c4&units=imperial";
 var apiUrl2 = "//api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=dbc0a62496177eb4a5dc2b08dde0d7c4&units=imperial "
 fetch(apiUrl).then(function(response) {
     response.json().then(function(data){
        printOneDay(data);
     })
 });
 fetch(apiUrl2).then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    });
});

};



getWeather("salt lake");