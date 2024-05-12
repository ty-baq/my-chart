// src/App.js
import React from 'react';
import ChartComponent from './components/ChartComponent';
import chartData from './data/chartData';
import chartOptions from './config/chartOptions';
import ErrorHandler from './components/ErrorHandler';


const App = () => {
  return (
    <ErrorHandler>
        <div>
            <ChartComponent data={chartData} options={chartOptions} />
        </div>
    </ErrorHandler>

  );
}

export default App;
