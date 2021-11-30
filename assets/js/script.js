var searchForm = document.querySelector("#user-form");
var searchInput = document.querySelector("#city");
var searchHistory = document.querySelector("#search-history")
var cityList = [];

var load = function() {
    var savedCities = localStorage.getItem("cities");

    if(!savedCities) {
        return false;
    }
    savedCities = JSON.parse(savedCities);
    // loop to print city buttons
    for(i = 0; i < savedCities.length; i++) {
        // pass each saved items to the printSearch history function
        printSearchHistory(savedCities[i]);
    }
}
var clickSearchHandler = function(event) {
    var search = event.target.getAttribute("data-city");

    if(search) {
        getWeather(search);
    }

};

// makes search history elements
var printSearchHistory = function(city) {
    
  //console.log(cities[i]);
  var searchItem = document.createElement("button");
  searchItem.classList = "col-12 city"
  searchItem.setAttribute("data-city", city);
  searchItem.textContent = city;
  searchHistory.appendChild(searchItem);
    
};


// function for saving search history to localStorage
var save = function(cityList) {
    localStorage.setItem("cities", JSON.stringify(cityList))
    
};

// search submit
var searchSubmitHandler = function(event) {
event.preventDefault()
var cityName = searchInput.value.trim();
if(cityName) {
    getWeather(cityName);
    cityList.push(cityName);
    printSearchHistory(cityName);
    console.log(cityList);
    save(cityList);
    searchInput.value = "";
   
}else{
    alert("Please enter a city valid name");
}
}; 

// function that prints one day forecast
var printOneDay = function(weather) {
    var oneDay = document.querySelector("#one-day-forecast"); 
    oneDay.innerHTML = "<h2 class='col'>" + weather.name +" "+"Today"+ "</h2> <span class='col-12'>temp:"+ " " + weather.main.temp +"</span> <span class='col-12'>wind:" + " " + weather.wind.speed +"</span> <span class='col-12'>humidity:"+ " " + weather.main.humidity +"</span> <span class='col-12'>low temp:"+ " " + weather.main.temp_min +"</span>"
    
};

// function that prints the five day forecast
var printFiveDays = function(weather) {
    var fiveDays = document.querySelector("#forecast-days");
   fiveDays.innerHTML =
 "<div class='col one-day'><h6>"+ weather.list[0].dt_txt.split(" ")[0] +"</h6><span class='col-12 five-day-span'>Temp:" + " " + weather.list[0].main.temp +"</span><span class='col-12 five-day-span'>Wind:" + " " + weather.list[0].wind.speed +"</span><span class='col-12 five-day-span'>Humidity:" + " " + weather.list[0].main.humidity +"</span></div>" + "<div class='col one-day'><h6>"+ weather.list[8].dt_txt.split(" ")[0] +"</h6><span class='col-12 five-day-span'>Temp:" + " " + weather.list[8].main.temp +"</span><span class='col-12 five-day-span'>Wind:" + " " + weather.list[8].wind.speed +"</span><span class='col-12 five-day-span'>Humidity:" + " " + weather.list[8].main.humidity +"</span></div>" + "<div class='col one-day'><h6>"+ weather.list[16].dt_txt.split(" ")[0] +"</h6><span class='col-12 five-day-span'>Temp:" + " " + weather.list[16].main.temp +"</span><span class='col-12 five-day-span'>Wind:" + " " + weather.list[16].wind.speed +"</span><span class='col-12 five-day-span'>Humidity:" + " " + weather.list[16].main.humidity +"</span></div>" + "<div class='col one-day'><h6>"+ weather.list[24].dt_txt.split(" ")[0] +"</h6><span class='col-12 five-day-span'>Temp:" + " " + weather.list[24].main.temp +"</span><span class='col-12 five-day-span'>Wind:" + " " + weather.list[24].wind.speed +"</span><span class='col-12 five-day-span'>Humidity:" + " " + weather.list[24].main.humidity +"</span></div>" + "<div class='col one-day'><h6>"+ weather.list[32].dt_txt.split(" ")[0] +"</h6><span class='col-12 five-day-span'>Temp:" + " " + weather.list[32].main.temp +"</span><span class='col-12 five-day-span'>Wind:" + " " + weather.list[32].wind.speed +"</span><span class='col-12 five-day-span'>Humidity:" + " " + weather.list[32].main.humidity +"</span></div>"
};

// function that call's api for data
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
load();
searchHistory.addEventListener("click",clickSearchHandler);
searchForm.addEventListener("submit", searchSubmitHandler);



