import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Ensure this line is correct

const axios = require('axios'); // Replace import with require for Axios
const MockAdapter = require('axios-mock-adapter'); // Also require MockAdapter
import Weather from './Weather'; // Correct import for default export

const mock = new MockAdapter(axios);

describe('Weather Component', () => {
    afterEach(() => {
        mock.reset();
    });

    test('displays loading initially', async () => {
        // Mocking Axios request
        mock.onGet('https://api.stormglass.io/v2/weather/point').reply(200, {
            hours: [{
                airTemperature: [{ value: 20 }],
                windSpeed: [{ value: 5 }],
                cloudCover: [{ value: 30 }]
            }]
        });

        render(<Weather />);

        // Assert loading text is displayed initially
        expect(screen.getByText(/loading/i)).toBeInTheDocument();

        // Wait for the weather data to be loaded and displayed
        await screen.findByText(/Johannesburg/i); // Assuming you have a location element

        // Assert that weather data is displayed
        expect(screen.getByText(/20 °C/)).toBeInTheDocument();
        expect(screen.getByText(/Wind Speed: 5 m\/s/)).toBeInTheDocument();
        expect(screen.getByText(/Cloud Cover: 30 %/)).toBeInTheDocument();
    });

    // Add more tests as needed
});

