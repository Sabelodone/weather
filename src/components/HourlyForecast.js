// HourlyForecast.js

import React from 'react';
import { getWeatherIcon, formatTime } from '../utils/weather';

const HourlyForecast = ({ data }) => {
  return (
    <div className="bg-weather-muted p-6 rounded-2xl shadow-lg max-w-4xl mx-auto mt-8">
      <h3 className="text-2xl font-semibold text-weather-primary mb-6 text-center">Hourly Forecast</h3>
      <div className="flex overflow-x-auto space-x-6 pb-4">
        {data.list.slice(0, 8).map((item, index) => {
          const WeatherIcon = getWeatherIcon(item.weather[0].icon);
          return (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <p className="text-lg text-weather-primary font-semibold mb-2 text-center">{formatTime(item.dt)}</p>
              {WeatherIcon && (
                <WeatherIcon className="w-14 h-14 text-weather-primary mb-2 transition-transform duration-300 transform hover:rotate-12" />
              )}
              <p className="text-lg font-semibold text-weather-primary">{Math.round(item.main.temp)}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
