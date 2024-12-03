// import React from 'react';

// function Header() {
//   return (
//     <header className="header">
//       <h1>HealthCare Dashboard</h1>
//     </header>
//   );
// }

// export default Header;

// Header.js
import React from 'react';
import '../styles/Header.css';
import { FaBell, FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <h1 className="title">Dashboard</h1>
      <div className="header-actions">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </header>
  );
}

export default Header;
