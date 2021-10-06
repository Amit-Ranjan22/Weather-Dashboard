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

function currentWeather(city){
    // get request url from :  https://openweathermap.org/forecast5
    let requestURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIkey}`;

    fetch(requestURL)
    .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            let weatherIcon = data.weather[0].icon;
            // get the url for weather icon from : https://openweathermap.org/weather-conditions
            let iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

            // let date = moment().format("dddd, MM-Do-YYYY, h:mm:ss a");

            // $(currentCity).html(data.name + "<img src=" + iconUrl + ">");
            // currentCity.textContent = `${data.name}<img src=${iconUrl}>`
            let currentDate = moment().format("MMM Do, YYYY");

            $(currentCity).html(`${data.name}<img src=${iconUrl}>${currentDate}`);

            let tempF = data.main.temp;
            $(currentTemperature).html(tempF + "℉");

            $(currentHumidty).html(data.main.humidity + "%");

            $(currentWindSpeed).html(data.wind.speed);

            UVIndex(data.coord.lon, data.coord.lat);
            foreCast(data.id);
};