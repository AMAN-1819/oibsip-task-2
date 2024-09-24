import React, { useState } from 'react';
import './TemperatureConverter.css'; // Import the CSS file

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [fromScale, setFromScale] = useState('celsius');
  const [toScale, setToScale] = useState('fahrenheit');
  const [convertedTemp, setConvertedTemp] = useState('');

  const convertTemperature = () => {
    if (isNaN(temperature)) {
      setConvertedTemp('Invalid input!');
      return;
    }

    let temp = parseFloat(temperature);
    let result;

    if (fromScale === 'celsius') {
      if (toScale === 'fahrenheit') result = (temp * 9/5) + 32;
      if (toScale === 'kelvin') result = temp + 273.15;
    } else if (fromScale === 'fahrenheit') {
      if (toScale === 'celsius') result = (temp - 32) * 5/9;
      if (toScale === 'kelvin') result = ((temp - 32) * 5/9) + 273.15;
    } else if (fromScale === 'kelvin') {
      if (toScale === 'celsius') result = temp - 273.15;
      if (toScale === 'fahrenheit') result = ((temp - 273.15) * 9/5) + 32;
    }

    setConvertedTemp(`${result.toFixed(2)} ${toScale === 'celsius' ? '°C' : toScale === 'fahrenheit' ? '°F' : 'K'}`);
  };

  return (
    <div className="converter-container">
      <h1>Temperature Converter</h1>

      <div className="input-field">
        <label>Enter Temperature: </label>
        <input
          type="text"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="Enter temperature"
        />
      </div>

      <div className="input-field">
        <label>Convert From: </label>
        <select value={fromScale} onChange={(e) => setFromScale(e.target.value)}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
      </div>

      <div className="input-field">
        <label>Convert To: </label>
        <select value={toScale} onChange={(e) => setToScale(e.target.value)}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
      </div>

      <button onClick={convertTemperature}>Convert</button>

      {convertedTemp && (
        <div className="result">
          <strong>Converted Temperature: {convertedTemp}</strong>
        </div>
      )}
    </div>
  );
};

export default TemperatureConverter;
