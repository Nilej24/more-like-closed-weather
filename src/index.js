import './style.scss';

import fetchWeatherOf from './fetchWeather';

fetchWeatherOf('lisbon')
  .then((data) => {
    console.log(data);
  });
