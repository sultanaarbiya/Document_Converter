import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BloodPressureChart({ diagnosisHistory }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Extracting data for systolic and diastolic values
    const labels = diagnosisHistory.map(item => `${item.month} ${item.year}`);
    const systolicData = diagnosisHistory.map(item => item.blood_pressure.systolic.value);
    const diastolicData = diagnosisHistory.map(item => item.blood_pressure.diastolic.value);

    // Destroy the existing chart instance before creating a new one to avoid duplicates
    let chartInstance = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Systolic',
            data: systolicData,
            borderColor: '#EF476F', // Pinkish color for Systolic line
            backgroundColor: 'rgba(239, 71, 111, 0.1)',
            fill: true,
            pointBackgroundColor: '#EF476F',
            tension: 0.4, // Smooth curves
          },
          {
            label: 'Diastolic',
            data: diastolicData,
            borderColor: '#118AB2', // Bluish color for Diastolic line
            backgroundColor: 'rgba(17, 138, 178, 0.1)',
            fill: true,
            pointBackgroundColor: '#118AB2',
            tension: 0.4, // Smooth curves
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              boxWidth: 10,
              font: {
                size: 14,
              },
              color: '#666',
            },
          },
          title: {
            display: true,
            text: 'Blood Pressure (Last 6 Months)',
            font: {
              size: 18,
            },
            color: '#333',
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 12,
              },
              color: '#555',
            },
          },
          y: {
            grid: {
              drawBorder: false,
              color: 'rgba(200, 200, 200, 0.1)',
            },
            ticks: {
              stepSize: 20,
              font: {
                size: 12,
              },
              color: '#555',
              callback: (value) => `${value} mmHg`, // Add units
            },
          },
        },
        elements: {
          point: {
            radius: 5,
            hoverRadius: 8,
          },
        },
      }
    });

    return () => chartInstance.destroy(); // Cleanup
  }, [diagnosisHistory]);

  return <canvas ref={chartRef} />;
}

export default BloodPressureChart;
