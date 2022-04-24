async function fetchWeatherOf(city) {
  const key = 'cbe457e67bfce0754a5fcca5bb09dd23';
  const locationResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`);
  const locationData = await locationResponse.json();

  const { lon, lat } = locationData[0];

  const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
  const weatherData = await weatherResponse.json();

  return weatherData;
}

export default fetchWeatherOf;
