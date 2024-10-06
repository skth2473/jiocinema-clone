import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">JioCinema Clone</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sports</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV Shows</a></li>
        </ul>
      </nav>
      <div className="premium">
        <button onClick={() => alert('Premium feature coming soon!')}>Go Premium</button>
      </div>
    </header>
  );
};

export default Header;
