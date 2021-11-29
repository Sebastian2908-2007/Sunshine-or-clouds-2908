


var printOneDay = function(weather) {
    var oneDay = document.querySelector("#one-day-forecast"); 
    oneDay.innerHTML = "<h2 class='col'>" + weather.name + "</h2> <span class='col-12'>temp:"+ " " + weather.main.temp +"</span> <span class='col-12'>wind:" + " " + weather.wind.speed +"</span> <span class='col-12'>humidity:"+ " " + weather.main.humidity +"</span> <span class='col-12'>low temp:"+ " " + weather.main.temp_min +"</span>"
    
};

var printFiveDays = function(weather) {
    var fiveDays = document.querySelector("#forecast-days");
   fiveDays.innerHTML =
 "<div class='col-2 one-day'><h6>"+ weather.list[0].dt_txt.split(" ")[0] +"</h6><span class='col-12 five-day-span'>Temp:" + " " + weather.list[0].main.temp +"</span><span class='col-12 five-day-span'>Wind:" + " " + weather.list[0].wind.speed +"</span><span class='col-12 five-day-span'>Humidity:" + " " + weather.list[0].main.humidity +"</span></div>" + "<div class='col-2 one-day'><h6>"+ weather.list[5].dt_txt.split(" ")[0] +"</h6><span class='col-12 five-day-span'>Temp:" + " " + weather.list[5].main.temp +"</span><span class='col-12 five-day-span'>Wind:" + " " + weather.list[5].wind.speed +"</span><span class='col-12 five-day-span'>Humidity:" + " " + weather.list[5].main.humidity +"</span></div>" + "<div class='col-2 one-day'><h6>"+ weather.list[10].dt_txt.split(" ")[0] +"</h6><span class='col-12 five-day-span'>Temp:" + " " + weather.list[10].main.temp +"</span><span class='col-12 five-day-span'>Wind:" + " " + weather.list[10].wind.speed +"</span><span class='col-12 five-day-span'>Humidity:" + " " + weather.list[10].main.humidity +"</span></div>" + "<div class='col-2 one-day'><h6>"+ weather.list[17].dt_txt.split(" ")[0] +"</h6><span class='col-12 five-day-span'>Temp:" + " " + weather.list[17].main.temp +"</span><span class='col-12 five-day-span'>Wind:" + " " + weather.list[17].wind.speed +"</span><span class='col-12 five-day-span'>Humidity:" + " " + weather.list[17].main.humidity +"</span></div>" + "<div class='col-2 one-day'><h6>"+ weather.list[25].dt_txt.split(" ")[0] +"</h6><span class='col-12 five-day-span'>Temp:" + " " + weather.list[25].main.temp +"</span><span class='col-12 five-day-span'>Wind:" + " " + weather.list[25].wind.speed +"</span><span class='col-12 five-day-span'>Humidity:" + " " + weather.list[25].main.humidity +"</span></div>"
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
       printFiveDays(data)
    });
});

};



getWeather("billings");