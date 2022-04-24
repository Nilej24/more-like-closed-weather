import './style.scss';

import fetchWeatherOf from './weather';
import updateDisplayedData from './display';

fetchWeatherOf('london').then(updateDisplayedData);
