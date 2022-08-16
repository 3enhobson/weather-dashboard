var search = document.getElementById('city-search');
var button = document.querySelector('.btn');
var inputValue = document.querySelector('.input');
var weatherApiKey = "044f455f3dcc82eaa1e96f95a679b26b";
var temperature = document.getElementById('temperature');
var humidity = document.getElementById('humidity');
var windSpeed = document.getElementById('wind-speed');
var uvIndex = document.getElementById('uv-index');
var currentCity = document.getElementById('current-city');
var searchHistory = JSON.parse(localStorage.getItem("mostRecentSearches")) || [];
var date = document.getElementById('currentDate');
var searchHistoryDisplay = document.getElementById('recentSearch');


//main function to display data from the API

//button.addEventListener('click',function(){
function getWeather() {
    //fetching the longitude and latitude for the user input
    fetch(`https:api.openweathermap.org/geo/1.0/direct?q=${inputValue.value}&limit=5&appid=${weatherApiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var latValue = data[0].lat;
            var lonValue = data[0].lon;
            var city = data[0].name;
            var state = data[0].state;
            
            currentCity.textContent = city + ", " + state;
            var currentDate = moment().format("dddd, l");
            date.textContent = currentDate;
            console.log(latValue);
            console.log(lonValue);

            //fetching weather data for the city based off the longitude and latitude 
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latValue}&lon=${lonValue}&units=imperial&appid=${weatherApiKey}`)

                .then(response => response.json())
                .then(data => {
                    console.log(data)

                    //displaying the data on the dashboard
                    var temp = " " + data.current.temp + "\u00B0" + "F";
                    temperature.textContent = temp;
                    var hum = " " + data.current.humidity + "%";
                    humidity.textContent = hum;
                    var wind = " " + data.current.wind_speed + " mph";
                    windSpeed.textContent = wind;
                    var uvI = " " + data.current.uvi;
                    uvIndex.textContent = uvI;
                    if(uvI <= 2) {
                        document.querySelector("#uv-index").setAttribute("class", "low")
                    } else if (uvI > 2 & uvI < 6) {
                        document.querySelector("#uv-index").setAttribute("class", "moderate")
                    } else if (uvI > 5 & uvI < 8) {
                        document.querySelector("#uv-index").setAttribute("class", "high")
                    } else if (uvI > 7 & uvI < 11) {
                        document.querySelector("#uv-index").setAttribute("class", "veryHigh")
                    } else {
                        document.querySelector("#uv-index").setAttribute("class", "extreme")
                    };
  

                    

                    }

                )



        })
}//)
;


//save search history in local storage and start the getWeather function
button.addEventListener('click', function historyDisplay() {
    var searchInput = inputValue.value;
    searchHistory.push(searchInput);
    localStorage.setItem("mostRecentSearches", JSON.stringify(searchHistory));
  


   
   
    //renderSearchHistory();


    getWeather()
});

//ToDo: 
//Add weather Icons, 
//Save search history, 
//create delete button for searcvh history,
//

//Bonus: 
//make CSS more Apealing

