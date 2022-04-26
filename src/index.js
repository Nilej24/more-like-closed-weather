import './style.scss';

let units = 'metric';

// return a promise that contains weather data
async function fetchWeatherOf(city) {
  // show loading message and hide error message
  document.querySelector('.loading').classList.remove('hidden');
  document.querySelector('.error').classList.add('hidden');

  const key = 'cbe457e67bfce0754a5fcca5bb09dd23';
  const locationResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`);
  const locationData = await locationResponse.json();

  const { lon, lat } = locationData[0];

  const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`);
  const weatherData = await weatherResponse.json();

  return weatherData;
}

// update display with new weather data
function updateDisplayedData(data) {
  // gonna change background or something depending if it's day or night
  const day = data.weather[0].icon[2] === 'd';

  document.querySelector('#location').innerText = data.name;
  document.querySelector('#country').innerText = data.sys.country;
  document.querySelector('#weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  document.querySelector('#weather').innerText = data.weather[0].description;
  document.querySelector('#temp').innerText = `${data.main.temp}°${units === 'metric' ? 'C' : 'F'}`;

  document.querySelector('#temp-feels-like').innerText = `${data.main.feels_like}°${units === 'metric' ? 'C' : 'F'}`;
  document.querySelector('#humidity').innerText = `${data.main.humidity}%`;
  document.querySelector('#wind').innerText = `${data.wind.deg}° ${data.wind.speed} ${units === 'metric' ? 'm/s' : 'mph'}`;
  document.querySelector('#pressure').innerText = `${data.main.pressure} hPa`;
}

// for when form is submitted
function search(city) {
  const loading = document.querySelector('.loading');
  const error = document.querySelector('.error');

  // fetch weather data
  fetchWeatherOf(city)
    // update display based on data
    .then(updateDisplayedData)
    // hide loading and error messages
    .then(() => {
      loading.classList.add('hidden');
    })
    .catch(() => {
      loading.classList.add('hidden');
      error.classList.remove('hidden');
    });
}

// form
document.querySelector('form').addEventListener('submit', (ev) => {
  ev.preventDefault();

  const city = document.querySelector('#search-city').value;
  units = document.querySelector('[name="units"]:checked').value;

  search(city);
});

search('london', 'metric');
