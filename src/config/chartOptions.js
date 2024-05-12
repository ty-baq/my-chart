// src/config/chartOptions.js
const chartOptions = {
    scales: {
      y: {  // Changed from 'yAxes' to 'y'
        beginAtZero: true,
        ticks: {
          precision: 0  // Ensures no decimal values on y-axis ticks
        }
      },
      x: {  // Added for completeness, configures x-axis
        title: {
          display: true,
          text: 'Colors'
        }
      }
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'  // Example of how to configure legend
      }
    },
    responsive: true  // Ensure chart is responsive
  };
  
  export default chartOptions;
  