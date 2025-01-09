import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity(''); // Clear input after search
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <label htmlFor="city-search" className="sr-only">Search City</label>
      <input
        id="city-search"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city..."
        className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-full text-white placeholder-white placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
        aria-label="Search"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
