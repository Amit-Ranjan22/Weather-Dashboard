let citySearch = $("#citySearch");
let searchButton = $("#searchButton");
let currentCity = $("#currentCity");
let currentTemperature = $("#temperature");
let currentHumidty = $("#humidity");
let currentWindSpeed = $("#windSpeed");
let currentUvindex = $("#uv-index");
let citiesArr = [];

function findCity(cty) {
    for (let i = 0; i < citiesArr.length; i++) {
        if (cty === citiesArr[i]) {
            return true;
        };
    };
    return false;
};

// get api key from : https://home.openweathermap.org/api_keys
let APIkey = "48726321b245b2f4d5392ad8202e246e";
let city = "";

function showWeather(event) {
    event.preventDefault();

    if (citySearch.val() !== "") {
        city = citySearch.val();
        currentWeather(city);
    };
};