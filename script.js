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