function updateDisplayedData(data) {
  document.querySelector('#location').innerText = data.name;
  document.querySelector('#country').innerText = data.sys.country;
  document.querySelector('#weather').innerText = data.weather[0].description;
  document.querySelector('#temp').innerText = data.main.temp;
  document.querySelector('#temp-feels-like').innerText = data.main.feels_like;
  document.querySelector('#humidity').innerText = data.main.humidity;
  document.querySelector('#windspeed').innerText = data.wind.speed;
  document.querySelector('#pressure').innerText = data.main.pressure;
}

export default updateDisplayedData;
