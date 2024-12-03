
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import BloodPressureChart from './BloodPressureChart';

// function PatientDetails() {
//   const [patientData, setPatientData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const username = 'coalition';
//         const password = 'skills-test';
//         const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

//         const response = await axios.get(
//           'https://fedskillstest.coalitiontechnologies.workers.dev/',
//           {
//             headers: {
//               'Authorization': authHeader,
//             },
//           }
//         );

//         setPatientData(response.data);
//       } catch (error) {
//         setError(error);
//         console.error('Error fetching patient data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Patient Details</h1>
//       {error ? (
//         <p>Error: Unable to fetch patient data. Please check your credentials.</p>
//       ) : (
//         <div>
//           {patientData.length > 0 ? (
//             patientData.map((patient, index) => (
//               <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
//                 <img src={patient.profile_picture} alt={`${patient.name}'s profile`} style={{ width: '100px', borderRadius: '50%' }} />
//                 <h2>{patient.name}</h2>
//                 <p><strong>Age:</strong> {patient.age}</p>
//                 <p><strong>Gender:</strong> {patient.gender}</p>
//                 <p><strong>Date of Birth:</strong> {patient.date_of_birth}</p>
//                 <p><strong>Emergency Contact:</strong> {patient.emergency_contact}</p>
//                 <p><strong>Insurance Type:</strong> {patient.insurance_type}</p>
//                 <h3>Blood Pressure History:</h3>

//                 <BloodPressureChart diagnosisHistory={patient.diagnosis_history} />
//               </div>
//             ))
//           ) : (
//             <p>Loading patient data...</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default PatientDetails;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BloodPressureChart from './BloodPressureChart';
import '../styles/PatientDetails.css'; // CSS file for styling
import { FaHeartbeat, FaTemperatureHigh } from 'react-icons/fa'; // FontAwesome icons
import { FaLungs } from 'react-icons/fa';


function PatientDetails() {
  const [patientData, setPatientData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = 'coalition';
        const password = 'skills-test';
        const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

        const response = await axios.get(
          'https://fedskillstest.coalitiontechnologies.workers.dev/',
          {
            headers: {
              Authorization: authHeader,
            },
          }
        );

        setPatientData(response.data);
      } catch (error) {
        setError(error);
        console.error('Error fetching patient data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="patient-details-container">
      <h1 className="header">Patient Details</h1>
      {error ? (
        <p className="error-message">Error: Unable to fetch patient data. Please check your credentials.</p>
      ) : (
        <div className="patient-list">
          {patientData.length > 0 ? (
            patientData.map((patient, index) => (
              <div key={index} className="patient-card">
                <div className="patient-info">
                  <img
                    src={patient.profile_picture}
                    alt={`${patient.name}'s profile`}
                    className="patient-img"
                  />
                  <h2>{patient.name}</h2>
                  <p><strong>Date of Birth:</strong> {new Date(patient.date_of_birth).toLocaleDateString()}</p>
                  <p><strong>Gender:</strong> {patient.gender}</p>
                  <p><strong>Phone:</strong> {patient.phone_number}</p>
                  <p><strong>Emergency Contact:</strong> {patient.emergency_contact}</p>
                  <p><strong>Insurance:</strong> {patient.insurance_type}</p>
                </div>

                <div className="vitals-container">
                  <h3>Blood Pressure History:</h3>
                  <BloodPressureChart diagnosisHistory={patient.diagnosis_history} />

                  <div className="vital-cards">
                    <div className="vital-card heart-rate">
                      {/* <img src="../styles/heart-rate-icon.png" alt="Heart Rate" /> */}
                      <FaHeartbeat size={40} color="red" />
                      <p>{patient.diagnosis_history[0].heart_rate.value} bpm</p>
                      <span>{patient.diagnosis_history[0].heart_rate.levels}</span>
                    </div>

                    <div className="vital-card respiratory-rate">
                      {/* <img src="/icons/lung-icon.png" alt="Respiratory Rate" /> */}
                      <FaLungs size={40} color="blue" />
                      <p>{patient.diagnosis_history[0].respiratory_rate.value} bpm</p>
                      <span>{patient.diagnosis_history[0].respiratory_rate.levels}</span>
                    </div>

                    <div className="vital-card temperature">
                      {/* <img src="/icons/temperature-icon.png" alt="Temperature" /> */}
                      <FaTemperatureHigh size={40} color="orange" />
                      <p>{patient.diagnosis_history[0].temperature.value} °F</p>
                      <span>{patient.diagnosis_history[0].temperature.levels}</span>
                    </div>
                  </div>

                  <h3>Diagnostic List:</h3>
                  <ul className="diagnostic-list">
                    {patient.diagnostic_list.map((diagnostic, idx) => (
                      <li key={idx}>
                        {diagnostic.name} - <span className="diagnostic-status">{diagnostic.status}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <p>Loading patient data...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default PatientDetails;
