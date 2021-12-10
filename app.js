import { getCityData, getWeatherData } from "./weather.js";

const form = document.querySelector("form");
const weatherCard = document.querySelector(".weather-card");


const getData = async (city) => {
    const cityData = await getCityData(city);
    const weatherData = await getWeatherData(cityData.Key);
    return {cityData, weatherData};
};


const updateUI = (data) => {
    const {EnglishName} = data.cityData;
    const {IsDayTime, WeatherText, WeatherIcon, Temperature: { Metric: {Value} }} = data.weatherData;
    weatherCard.innerHTML = `
    <img src="./img/${IsDayTime ? "day" : "night"}.svg" class="img-day-time" alt="day-time-illustration" />
    <h2>${EnglishName}</h2>
    <div>${WeatherText}</div>
    <img src="./img/icons/${WeatherIcon}.svg" class="img-weather-icon" alt="weather-icon" />
    <div>${Value} °C</div>
    `;
};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityname = form.cityname.value.trim();
    getData(cityname)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});