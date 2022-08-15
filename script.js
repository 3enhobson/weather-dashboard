var search = document.getElementById('city-search')
var button = document.querySelector('.btn')
var inputValue = document.querySelector('.input')
var weatherApiKey = "044f455f3dcc82eaa1e96f95a679b26b"
var temperature = document.getElementById('temperature')
var humidity = document.getElementById('humidity')
var windSpeed = document.getElementById('wind-speed')
var uvIndex = document.getElementById('uv-index')
var currentCity = document.getElementById('current-city')
//var currentDate = moment().format("dddd, MMMM Do YYYY");
//$("#currentDate").text(currentDate);



button.addEventListener('click',function(){
    fetch(`https:api.openweathermap.org/geo/1.0/direct?q=${inputValue.value}&limit=5&appid=${weatherApiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    var latValue = data[0].lat
    var lonValue = data[0].lon
    var city = data[0].name
    var state = data[0].state
    currentCity.textContent = city+", "+state
    console.log(latValue)
    console.log(lonValue)
   
    //fetch(`https:api.openweathermap.org/data/2.5/onecall?lat=${latValue}&lon=${lonValue}&units=imperial&appid=${weatherApiKey}`)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latValue}&lon=${lonValue}&units=imperial&appid=${weatherApiKey}`)
    
    .then(response => response.json())
    .then(data => {
        console.log(data)
var temp = " "+data.current.temp+"\u00B0"+"F"
temperature.textContent = temp
var hum = " "+data.current.humidity+"%"
humidity.textContent = hum
var wind = " "+data.current.wind_speed+" mph"
windSpeed.textContent = wind
var uvI = " "+data.current.uvi
uvIndex.textContent = uvI

    }

)
    
    
    
})
});



