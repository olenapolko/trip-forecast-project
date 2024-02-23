import cloudy from './weather-icons/cloudy.png'
import lightCloudyRainy from './weather-icons/light-cloudy-rainy.png';
import fog from './weather-icons/fog.png';
import partlyCloudy from './weather-icons/partly-cloudy.png';
import rainfall from './weather-icons/rainfall.png';
import snowfall from './weather-icons/snowfall.png';
import sunny from './weather-icons/sunny.png';
import thunderstorm from './weather-icons/thunderstorm.png';
import wind from './weather-icons/wind.png';
import bgCloud from './weather-icons/bg-cloud.png';

interface WeatherIcons {
    [key: string]: string;
  }

export const weatherIcons: WeatherIcons = {
  'partly-cloudy-day': partlyCloudy,
  'clear-day': sunny,
  rain: lightCloudyRainy,
  cloudy,
  snow: snowfall,
  fog,
  wind,
  'showers-day': rainfall,
  'thunder-rain': thunderstorm,
  'thunder-showers-day': thunderstorm,
  bgCloud,
};