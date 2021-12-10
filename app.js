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
    weatherCard.innerHTML = (`
    name: ${EnglishName}
    isDayTime: ${IsDayTime}
    weatherText: ${WeatherText}
    weatherIcon: ${WeatherIcon}
    temperature: ${Value} °C
    `);
};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityname = form.cityname.value.trim();
    getData(cityname)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});