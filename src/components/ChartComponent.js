// src/components/BarChart.js
import React from 'react';
import styles from '../styles/ChartComponent.module.css';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(...registerables);


/**
 * Reusable chart component.
 * @param {Object} props - Component props
 * @param {Object} props.data - Chart data
 * @param {Object} props.options - Chart options
 */
const ChartComponent = ({ data, options }) => {
  if (!data || !data.datasets || data.datasets.length === 0) {
    return <div>No data available to display the chart.</div>;
  }

    return (
        <div className={styles.chartContainer}>
          <Bar data={data} options={options} />
        </div>
    );
};

export default ChartComponent;

