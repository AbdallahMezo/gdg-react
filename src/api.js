

const key = '537d04fc6e921cdc71ffa3b581c298bd';
const api = 'http://api.openweathermap.org/data/2.5/weather'

const fetchWeather = city =>
fetch(`${api}?q=${city}&APPID=${key}`)
.then(response => response.json())
.then(data => data);

export { fetchWeather };
