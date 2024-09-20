// Dashboard.js
import React from 'react';
import Weather from './Weather';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="container mt-5 dashboard-container">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <Weather />
                </div>
                {/* Add more columns or components here */}
            </div>
        </div>
    );
};

export default Dashboard;




