import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { motion } from 'framer-motion';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';
import WeatherSkeleton from './WeatherSkeleton';
import SearchBar from './SearchBar';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const fetchWeather = async (city) => {
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  const [currentWeather, forecast] = await Promise.all([
    axios.get(currentWeatherUrl),
    axios.get(forecastUrl),
  ]);

  return {
    current: currentWeather.data,
    forecast: forecast.data,
  };
};

const WeatherDashboard = () => {
  const [city, setCity] = useState('Johannesburg');

  const { data, error, isLoading, refetch } = useQuery(
    ['weather', city],
    () => fetchWeather(city),
    { enabled: true }
  );

  const handleSearch = (searchCity) => {
    if (searchCity !== city) {
      setCity(searchCity);
      refetch();
    }
  };

  const transitionConfig = { duration: 0.5 };
  const animationConfig = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <div className="text-white min-h-screen p-6 flex flex-col items-center">
      <motion.div {...animationConfig} transition={transitionConfig} className="w-full max-w-xl mb-6">
        <SearchBar onSearch={handleSearch} />
      </motion.div>

      {isLoading && (
        <motion.div {...animationConfig} transition={transitionConfig} className="w-full max-w-xl mb-6">
          <WeatherSkeleton />
        </motion.div>
      )}

      {error && (
        <motion.p
          {...animationConfig}
          transition={transitionConfig}
          className="text-red-500 text-center font-bold p-4 w-full max-w-xl"
        >
          Oops! Something went wrong. Please try again later.
        </motion.p>
      )}

      {data && (
        <motion.div
          {...animationConfig}
          transition={transitionConfig}
          className="space-y-6 p-6 w-full max-w-3xl bg-white bg-opacity-10 rounded-lg shadow-lg"
        >
          <CurrentWeather data={data.current} />
          <HourlyForecast data={data.forecast} />
          <DailyForecast data={data.forecast} />
        </motion.div>
      )}
    </div>
  );
};

export default WeatherDashboard;
