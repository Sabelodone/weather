import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './Weather.css'; // Ensure the CSS path is correct

const Weather = () => {
    const [city, setCity] = useState('Johannesburg'); // Default city
    const [weather, setWeather] = useState(null);

    const fetchWeather = useCallback(async () => {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: city,
                    appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
                    units: 'metric' // To get temperature in Celsius
                }
            });
            console.log('Weather data:', response.data);
            setWeather(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            console.error('Error details:', error.response ? error.response.data : error.message);
        }
    }, [city]);

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    if (!weather) {
        return <p>Loading...</p>;
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = () => {
        fetchWeather();
    };

    // Determine weather conditions for dynamic background
    let weatherClass = 'weather-card';
    let backgroundImage = '';

    if (weather.weather[0].main === 'Clear' && weather.sys.pod === 'd') {
        backgroundImage = '/daytime1.jpg'; // Ensure this path is correct
    } else if (weather.weather[0].main === 'Clear' && weather.sys.pod === 'n') {
        backgroundImage = '/nighttime.jpg'; // Ensure this path is correct
    } else if (weather.weather[0].main === 'Rain') {
        backgroundImage = '/rainyday.jpg'; // Ensure this path is correct
    } else if (weather.weather[0].main === 'Clouds') {
        backgroundImage = '/cloudysky.jpg'; // Ensure this path is correct
    }

    return (
        <div className={weatherClass} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})` }}>
            <div className="card-body">
                <h5 className="card-title">Weather</h5>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Enter city..."
                        value={city}
                        onChange={handleCityChange}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <p className="weather-location">{city}</p>
                <p className="weather-temp">{weather.main.temp} °C</p>
                <p className="weather-description">Wind Speed: {weather.wind.speed} m/s</p>
                <p className="weather-description">Cloud Cover: {weather.clouds.all} %</p>
            </div>
        </div>
    );
};

export default Weather;
