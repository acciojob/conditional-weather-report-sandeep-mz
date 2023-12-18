import React, { useState, useEffect } from 'react';
// import './styles/App.css';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  useEffect(() => {
    const simulatedWeatherData = { temperature: 25, conditions: 'Sunny' };
    setWeather(simulatedWeatherData);
  }, []);

  const { temperature, conditions } = weather;

  const temperatureStyle = {
    color: temperature > 20 ? 'red' : 'blue',
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="weather-info">
        <p>Temperature: <span style={temperatureStyle}>{temperature}°C</span></p>
        <p>Conditions: {conditions}</p>
      </div>
    </div>
  );
};

export default App;
