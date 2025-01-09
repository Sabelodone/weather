import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WeatherDashboard from './components/WeatherDashboard';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col">
        <div className="flex-grow">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<WeatherDashboard />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </div>
    </Router>
  );
}

export default App;


