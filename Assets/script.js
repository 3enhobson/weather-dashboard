var search = document.getElementById('city-search');
var button = document.querySelector('.btn');
var inputValue = document.querySelector('.input');
var weatherApiKey = "044f455f3dcc82eaa1e96f95a679b26b";
var icon = document.getElementById('icon')
var temperature = document.getElementById('temperature');
var humidity = document.getElementById('humidity');
var windSpeed = document.getElementById('wind-speed');
var uvIndex = document.getElementById('uv-index');
var currentCity = document.getElementById('current-city');
var date = document.getElementById('currentDate');
var recentSearchEl = document.getElementById('recentSearch');
//var savedCities = [];
var day1Date = document.getElementById('day1');
var day2Date = document.getElementById('day2');
var day3Date = document.getElementById('day3');
var day4Date = document.getElementById('day4');
var day5Date = document.getElementById('day5');
var day1Icon = document.getElementById('day1Icon')
var day2Icon = document.getElementById('day2Icon')
var day3Icon = document.getElementById('day3Icon')
var day4Icon = document.getElementById('day4Icon')
var day5Icon = document.getElementById('day5Icon')
var day1Temp = document.getElementById('day1Temp');
var day2Temp = document.getElementById('day2Temp');
var day3Temp = document.getElementById('day3Temp');
var day4Temp = document.getElementById('day4Temp');
var day5Temp = document.getElementById('day5Temp');
var day1Hum = document.getElementById('day1Hum');
var day2Hum = document.getElementById('day2Hum');
var day3Hum = document.getElementById('day3Hum');
var day4Hum = document.getElementById('day4Hum');
var day5Hum = document.getElementById('day5Hum');
var day1Wind = document.getElementById('day1Wind');
var day2Wind = document.getElementById('day2Wind');
var day3Wind = document.getElementById('day3Wind');
var day4Wind = document.getElementById('day4Wind');
var day5Wind = document.getElementById('day5Wind');

//main function to display data from the API

//button.addEventListener('click',function(){
function getWeather(searchInput) {
    //fetching the longitude and latitude for the user input
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=5&appid=${weatherApiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var latValue = data[0].lat;
            var lonValue = data[0].lon;
            var city = data[0].name;
            var state = data[0].state;
            var country = data[0].country;

        
             if (!state){
                currentCity.textContent = city + ", " + country;
            } else {
            currentCity.textContent = city + ", " + state + ", " + country;
            }

           

            var currentDate = moment().format("dddd, l");
            date.textContent = currentDate;
            console.log(latValue);
            console.log(lonValue);

            //fetching weather data for the city based off the longitude and latitude 
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latValue}&lon=${lonValue}&units=imperial&appid=${weatherApiKey}`)

                .then(response => response.json())
                .then(data => {
                    console.log(data)

                   
                     var unHide = document.querySelector('#weather');
                    console.log(unHide)
                    unHide.classList.remove('hide')
                    
                        

                    //displaying the data on the dashboard
                    var currentIconCode = data.current.weather[0].icon;
                    icon.setAttribute("src", `https://openweathermap.org/img/wn/${currentIconCode}@2x.png`);
                    var temp = "Temperature: " + data.current.temp + "\u00B0" + "F";
                    temperature.textContent = temp;
                    var hum = "Humidity: " + data.current.humidity + "%";
                    humidity.textContent = hum;
                    var wind = "Wind Speed: " + data.current.wind_speed + " mph";
                    windSpeed.textContent = wind;
                    var uvI = data.current.uvi;
                    uvIndex.textContent = "UV index: " + uvI;
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
  
 //Forcast Date Display
                    var D1Date = moment(data.daily[1].dt * 1000).format("l");
                    day1Date.textContent = D1Date;
                    var D2Date = moment(data.daily[2].dt * 1000).format("l");
                    day2Date.textContent = D2Date;
                    var D3Date = moment(data.daily[3].dt * 1000).format("l");
                    day3Date.textContent = D3Date;
                    var D4Date = moment(data.daily[4].dt * 1000).format("l");
                    day4Date.textContent = D4Date;
                    var D5Date = moment(data.daily[5].dt * 1000).format("l");
                    day5Date.textContent = D5Date;
//Forcast Icon
                    var D1Icon = data.daily[1].weather[0].icon;
                    day1Icon.setAttribute("src", `https://openweathermap.org/img/wn/${D1Icon}.png`);
                    var D2Icon = data.daily[2].weather[0].icon;
                    day2Icon.setAttribute("src", `https://openweathermap.org/img/wn/${D2Icon}.png`);
                    var D3Icon = data.daily[3].weather[0].icon;
                    day3Icon.setAttribute("src", `https://openweathermap.org/img/wn/${D3Icon}.png`);
                    var D4Icon = data.daily[4].weather[0].icon;
                    day4Icon.setAttribute("src", `https://openweathermap.org/img/wn/${D4Icon}.png`);
                    var D5Icon = data.daily[5].weather[0].icon;
                    day5Icon.setAttribute("src", `https://openweathermap.org/img/wn/${D5Icon}.png`);
//Temperature Forcast
                    var D1Temp = "Temp: "+data.daily[1].temp.day+"\u00B0" + "F";
                    day1Temp.textContent = D1Temp;
                    var D2Temp = "Temp: "+data.daily[2].temp.day+"\u00B0" + "F";
                    day2Temp.textContent = D2Temp;
                    var D3Temp = "Temp: "+data.daily[3].temp.day+"\u00B0" + "F";
                    day3Temp.textContent = D3Temp;
                    var D4Temp = "Temp: "+data.daily[4].temp.day+"\u00B0" + "F";
                    day4Temp.textContent = D4Temp;
                    var D5Temp = "Temp: "+data.daily[5].temp.day+"\u00B0" + "F";
                    day5Temp.textContent = D5Temp;
//Humidity Forcast
                    var D1Hum = "Humidity: "+data.daily[1].humidity+"%";
                    day1Hum.textContent = D1Hum;
                    var D2Hum = "Humidity: "+data.daily[2].humidity+"%";
                    day2Hum.textContent = D2Hum;
                    var D3Hum = "Humidity: "+data.daily[3].humidity+"%";
                    day3Hum.textContent = D3Hum;
                    var D4Hum = "Humidity: "+data.daily[4].humidity+"%";
                    day4Hum.textContent = D4Hum;
                    var D5Hum = "Humidity: "+data.daily[5].humidity+"%";
                    day5Hum.textContent = D5Hum;
//Wind Forcast
                    var D1Wind = "Wind: "+data.daily[1].wind_speed+"mph";
                    day1Wind.textContent = D1Wind;
                    var D2Wind = "Wind: "+data.daily[2].wind_speed+"mph";
                    day2Wind.textContent = D2Wind;
                    var D3Wind = "Wind: "+data.daily[3].wind_speed+"mph";
                    day3Wind.textContent = D3Wind;
                    var D4Wind = "Wind: "+data.daily[4].wind_speed+"mph";
                    day4Wind.textContent = D4Wind;
                    var D5Wind = "Wind: "+data.daily[5].wind_speed+"mph";
                    day5Wind.textContent = D5Wind;


                })
            })
        };


//save search history in local storage and start the getWeather function
button.addEventListener('click', function() {
    var searchInput = inputValue.value;
    var searchHistory = JSON.parse(localStorage.getItem("mostRecentSearches")) || [];
  
    searchHistory.push(searchInput);
    
    localStorage.setItem("mostRecentSearches", JSON.stringify(searchHistory));
    getSearchHistory();

    

    getWeather(searchInput)
});

function renderSearchHistory(history){
   recentSearchEl.innerHTML = ""
    //var searchHistory = JSON.parse(localStorage.getItem("mostRecentSearches")) || [];
    console.log(history)
    for(var i = history.length-1; i >= 0; i--) {
        console.log(history[i])
        var btn = document.createElement("button");
        btn.innerHTML = history[i]
        btn.setAttribute("data-city", history[i]);
        btn.classList.add('history')
        console.log(btn.textContent)
        recentSearchEl.appendChild(btn);
        };
}


function getSearchHistory(){
    var history = JSON.parse(localStorage.getItem("mostRecentSearches")) || [];
renderSearchHistory(history);
}
getSearchHistory();


function handleSearchHistoryClick(e) {
    // Don't do search if current elements is not a search history button
    if (!e.target.matches('.history')) {
      return;
    }
  
    var btn = e.target;
    var search = btn.getAttribute('data-city');
    getWeather(search)
  };

  //function showWeatherEl(){
    //var unHide = document.querySelector('#weather');
    //console.log(unHide)
    //unHide.classList.remove('hide')

    //};
 
   

recentSearchEl.addEventListener("click", handleSearchHistoryClick)




//ToDo: 
 
//Save search history, 
//create delete button for searcvh history,
//

//Bonus: 
//make CSS more Apealing

