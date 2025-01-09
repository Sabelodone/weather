import React from 'react';
import { getWeatherIcon } from '../utils/weather';
import { WiHumidity, WiStrongWind, WiBarometer } from 'react-icons/wi';

const CurrentWeather = ({ data }) => {
  const WeatherIcon = getWeatherIcon(data.weather[0].icon); // Get the weather icon component

  return (
    <div className="p-8 rounded-2xl shadow-lg max-w-2xl mx-auto bg-gradient-to-br from-blue-500 to-blue-700 text-white">
      <h2 className="text-4xl font-semibold text-purple-300 mb-4">{data.name}</h2>
      
      <div className="flex justify-center items-center mb-6">
        {WeatherIcon && <WeatherIcon className="w-24 h-24 text-purple-300" />}
        
        <div className="ml-6">
          <p className="text-6xl font-bold text-purple-300">{Math.round(data.main.temp)}°C</p>
          <p className="text-xl text-blue-100 capitalize">{data.weather[0].description}</p>
        </div>
      </div>
      
      <p className="text-lg text-blue-200 mt-2">Feels like {Math.round(data.main.feels_like)}°C</p>
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="flex items-center justify-center p-4 rounded-lg shadow-md bg-blue-600">
          <WiHumidity className="w-6 h-6 text-purple-300 mr-2" />
          <span className="text-lg text-white">{data.main.humidity}%</span>
        </div>

        <div className="flex items-center justify-center p-4 rounded-lg shadow-md bg-blue-600">
          <WiStrongWind className="w-6 h-6 text-purple-300 mr-2" />
          <span className="text-lg text-white">{Math.round(data.wind.speed * 3.6)} km/h</span>
        </div>

        <div className="flex items-center justify-center p-4 rounded-lg shadow-md bg-blue-600">
          <WiBarometer className="w-6 h-6 text-purple-300 mr-2" />
          <span className="text-lg text-white">{data.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
