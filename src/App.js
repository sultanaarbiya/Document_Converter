// // import React from 'react';
// // import './styles/App.css';
// // import Header from './components/Header';
// // import Sidebar from './components/Sidebar';
// // import PatientDetails from './components/PatientDetails';

// // function App() {
// //   return (
// //     <div className="app-container">
// //       <Sidebar />
// //       <div className="main-content">
// //         <Header />
// //         <PatientDetails />
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// // App.js
// import React from 'react';
// import './styles/App.css';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import PatientDetails from './components/PatientDetails';

// function App() {
//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="content-wrapper">
//           <PatientDetails />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// App.js
import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PatientDetails from './components/PatientDetails';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <PatientDetails />
        </div>
      </div>
    </div>
  );
}

export default App;

