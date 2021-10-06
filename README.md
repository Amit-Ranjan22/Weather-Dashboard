# Weather-Dashboard

**User Story**

As a frequent traveller who needs to be constantly updated about weather conditions of various destinations<br>
I WANT  :  a weather dashboard to receive the weather forecast for next 5 days for multiple 
           cities<br>
SO THAT :  I can plan my trip accordingly.

**Acceptance Criteria**

**(1)* I am given a text box to search for any city forecast**
------
It's considered done<br>
------
WHEN: A div is created and an input box type text is added to the div.<br>
WHEN: A button element is added inside that div to click and search for the city.<br>
WHEN: All the divs are given class name and IDs & those ids are used to style the page.

**(2)* When I search for a city then I am presented with current and future conditions for that city and that city is added to the search history**
------
It's considered done<br>
------
WHEN: All the required elements are grabbed by using their ids and stored in variables.<br>
WHEN: An API key is generated for a weather forecast website.<br>
WHEN: A function "currentWeather(city)" is wrriten to get the current weather condition.<br>
WHEN: That key is used with the website URL to fetch the data.<br> 
WHEN: "fetch()" method is wriiten to get the data from the website by using the URL.
WHEN: "moment()" method is used display the current date.<br>
WHEN: loccal storage is created to store the cities name used for serching wether condition.<br>
WHEN: a function "foreCast()" is written to display the forecast for next 5 days.<br>
WHEN: for-loop is used to display the weather for each day.

**(3)* When I view current weather conditions for that city, then I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index**
------
It's considered done<br>
------
WHEN: "fetch()" request is used to generate the response from the website by using keys in the 
      website url.<br>
WHEN: by generated response is used to access the temperature, humidity, wind-speed uv-index 
      inside fetch() method.<br>
WHEN: url is used to fetch the weather icon from the website.<br>

**(4)* WHEN I click on a city in the search history, then I am again presented with current and future conditions for that city**
------
It's considered done<br>
------
WHEN: a function "addToList(cty)" is written to store the searched city name in a list.<br>
WHEN: a function "usePastSearch(event)" is written to invoke the "currentWeather(city)" when 
      any city is clicked from the list.

------
Deployed application should look like the below given image.<br>
------
<img src = "Assets/06-server-side-apis-homework-demo.png" alt= "Demo-app-image">