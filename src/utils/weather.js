import { 
    WiDaySunny,
    WiNightClear,
    WiDayCloudy,
    WiNightAltCloudy,
    WiCloud,
    WiCloudy,
    WiDayShowers,
    WiNightAltShowers,
    WiDayRain,
    WiNightAltRain,
    WiDayThunderstorm,
    WiNightAltThunderstorm,
    WiDaySnow,
    WiNightAltSnow,
    WiDayFog,
    WiNightFog,
  } from 'react-icons/wi';
  
  // Create a mapping of weather icon codes to their respective icon components
  const iconMap = {
    '01d': WiDaySunny,             // Clear sky (day)
    '01n': WiNightClear,           // Clear sky (night)
    '02d': WiDayCloudy,            // Few clouds (day)
    '02n': WiNightAltCloudy,       // Few clouds (night)
    '03d': WiCloud,                // Scattered clouds
    '03n': WiCloud,                // Scattered clouds (night)
    '04d': WiCloudy,               // Broken clouds
    '04n': WiCloudy,               // Broken clouds (night)
    '09d': WiDayShowers,           // Shower rain (day)
    '09n': WiNightAltShowers,      // Shower rain (night)
    '10d': WiDayRain,              // Rain (day)
    '10n': WiNightAltRain,         // Rain (night)
    '11d': WiDayThunderstorm,      // Thunderstorm (day)
    '11n': WiNightAltThunderstorm, // Thunderstorm (night)
    '13d': WiDaySnow,              // Snow (day)
    '13n': WiNightAltSnow,         // Snow (night)
    '50d': WiDayFog,               // Fog (day)
    '50n': WiNightFog,             // Fog (night)
  };
  
  // Default icon for undefined codes
  const defaultIcon = WiDaySunny;
  
  // Get the weather icon for the given icon code
  export const getWeatherIcon = (iconCode) => {
    return iconMap[iconCode] || defaultIcon;
  };
  
  // Format the given timestamp into a human-readable time (e.g., 2:00 PM)
  export const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };
  
  // Format the given timestamp into a human-readable day (e.g., Mon)
  export const formatDay = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
    });
  };
  