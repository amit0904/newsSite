import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav style={{ height: '50px', backgroundColor: 'black' }}>
      <ol className="linkStyle">
        <li><Link to="/">Main</Link></li>
        <li><Link to="/News">News</Link></li>
      </ol>
    </nav>
  );
}

export default NavBar;
