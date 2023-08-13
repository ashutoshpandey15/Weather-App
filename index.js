const apiKey ="af12d905eaef741275b5ac56a11e3f25";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeatherData(city){
    
        // fetching the data from the api
        const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
        //&appid is a url query parameter in which we pass the api key
        //showing the response in json format
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerText = data.main.humidity +"%";
        document.querySelector(".wind").innerText = data.wind.speed +"km/h";
        
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src = "images/cloudy.png";

        }else if(data.weather[0].main=="Rain"){
            weatherIcon.src = "images/rain.png";
        }else if(data.weather[0].main=="Clear"){
            weatherIcon.src = "images/clear.png";
        }else if(data.weather[0].main=="Drizzle "){
            weatherIcon.src = "images/drizzle.png";
        }else if(data.weather[0].main=="Mist"){
            weatherIcon.src = "images/mist.png";
        }

}


//UPDATING THE CITY BASED ON INPUT via event listener
searchBtn.addEventListener("click",()=>{
    
    checkWeatherData(searchBox.value);
});