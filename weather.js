const key = "O3feCo3Wk1HD21N1lYh9exgf3f4uA3G4";

const getCityData = async (city) => {
    const resourceURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(resourceURL+query);
    const data = await response.json();
    return data[0];
};

const getWeatherData = async (id) => {
    const resourceURL = `http://dataservice.accuweather.com/currentconditions/v1/${id}`;
    const query = `?apikey=${key}`;
    const response = await fetch(resourceURL+query);
    const data = await response.json();
    return data[0];
};

export { getCityData, getWeatherData };