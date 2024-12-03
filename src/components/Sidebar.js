// import React from 'react';

// function Sidebar() {
//   return (
//     <aside className="sidebar">
//       <ul>
//         <li>Overview</li>
//         <li>Patients</li>
//         <li>Schedule</li>
//         <li>Messages</li>
//         <li>Transactions</li>
//       </ul>
//     </aside>
//   );
// }

// export default Sidebar;

// Sidebar.js
import React from 'react';
import { FaHome, FaUserFriends, FaCalendarAlt, FaEnvelope, FaDollarSign } from 'react-icons/fa';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">TechCare</h2>
      <ul className="sidebar-menu">
        <li>
          <FaHome className="menu-icon" /> Overview
        </li>
        <li>
          <FaUserFriends className="menu-icon" /> Patients
        </li>
        <li>
          <FaCalendarAlt className="menu-icon" /> Schedule
        </li>
        <li>
          <FaEnvelope className="menu-icon" /> Messages
        </li>
        <li>
          <FaDollarSign className="menu-icon" /> Transactions
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

