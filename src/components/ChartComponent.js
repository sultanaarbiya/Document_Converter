import React from 'react';
import { Line } from 'react-chartjs-2';

function ChartComponent({ data }) {
  const chartData = {
    labels: data.map((entry) => `${entry.month} ${entry.year}`),
    datasets: [
      {
        label: 'Systolic',
        data: data.map((entry) => entry.blood_pressure.systolic.value),
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Diastolic',
        data: data.map((entry) => entry.blood_pressure.diastolic.value),
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
}

export default ChartComponent;
