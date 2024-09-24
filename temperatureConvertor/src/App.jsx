import React from 'react';
import TemperatureConverter from './component/TemperatureConverter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="converter-container">
        <TemperatureConverter />
      </div>
    </div>
  );
}

export default App;
