
import React from "react";
import './../styles/App.css';

const WeatherApp = ({ temperature, conditions }) => {
  const temperatureColor = temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <h1>Weather App</h1>
      <p>Temperature: <span style={{ color: temperatureColor }}>{temperature}°C</span></p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

const App = () => {
  // Weather input
  const weatherData = { temperature: 27, conditions: 'Sunny' };
  return (
    <div>
      <WeatherApp temperature={weatherData.temperature} conditions={weatherData.conditions} />
    </div>
  );
};

export default App;