import React from 'react';

const WeatherSkeleton = () => {
  return (
    <div className="space-y-6 p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-500 to-blue-700 max-w-2xl mx-auto animate-pulse">
      {/* Cloud Image with Animation */}
      <div className="relative h-40 bg-gradient-to-r from-white to-transparent rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: 'url("https://your-cloud-image-url.com/cloud.png")' }}
        />
      </div>

      {/* Title Placeholder */}
      <div className="h-8 bg-white bg-opacity-30 rounded w-3/4 mx-auto"></div>

      {/* Weather Icon and Temp Placeholder */}
      <div className="flex justify-center items-center space-x-6">
        <div className="w-20 h-20 bg-white bg-opacity-30 rounded-full"></div>
        <div className="h-8 bg-white bg-opacity-30 rounded w-1/2"></div>
      </div>

      {/* Additional Info Placeholder */}
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="h-6 bg-white bg-opacity-30 rounded"></div>
        ))}
      </div>

      {/* Detailed Data Placeholder */}
      <div className="grid grid-cols-3 gap-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="h-12 bg-white bg-opacity-30 rounded-lg shadow-md"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WeatherSkeleton;
