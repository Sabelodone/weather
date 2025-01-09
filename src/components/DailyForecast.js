// DailyForecast.js

import React from 'react';
import { getWeatherIcon, formatDay } from '../utils/weather';



const DailyForecast = ({ data }) => {
  const dailyData = data.list.filter((_, index) => index % 8 === 0);

  return (
    <div className="bg-weather-muted p-6 rounded-2xl shadow-lg max-w-3xl mx-auto mt-8">
      <h3 className="text-2xl font-semibold text-weather-primary mb-4">7-Day Forecast</h3>
      
      <div className="space-y-4">
        {dailyData.map((item, index) => {
          const WeatherIcon = getWeatherIcon(item.weather[0].icon);
          return (
            <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-lg text-weather-primary font-semibold w-24">{formatDay(item.dt)}</p>
              {WeatherIcon && <WeatherIcon className="w-12 h-12 text-weather-primary" />}
              <p className="text-lg text-weather-primary font-medium text-right w-32">
                {Math.round(item.main.temp_min)}° / {Math.round(item.main.temp_max)}°
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
