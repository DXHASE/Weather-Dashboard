var searchForm = document.querySelector("#search-form");
var userCity = document.querySelector(".city-name");
var getCoordinates = function(cityName){
    var getLatitude ="http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=b6111499107ea4a9ba60b48a4c1c1ca6";
    fetch(getLatitude)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            getWeatherInfo(data);
        });

}
var getWeatherInfo = function(data){
    var lat = data[0].lat;
    var long = data[0].lon;
    var apiUrl="https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&appid=b6111499107ea4a9ba60b48a4c1c1ca6";
    console.log(lat,long);
    fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.list);
    })
}
var displayWeatherInfo = function(){
 
}
displayWeatherInfo();
function formSubmitHandler(event) {
    event.preventDefault();
    var city = userCity.value.trim();
    if(city){
        getCoordinates(city);
        userCity.value= "";
    }else{
        alert(" Enter a city name ");
    }
}

searchForm.addEventListener("submit",formSubmitHandler);
