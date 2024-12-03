import React from 'react';
import ChartComponent from './ChartComponent';

function DiagnosisHistory({ data }) {
  return (
    <div className="diagnosis-history">
      <h3>Diagnosis History</h3>
      <ChartComponent data={data} />
    </div>
  );
}

export default DiagnosisHistory;
