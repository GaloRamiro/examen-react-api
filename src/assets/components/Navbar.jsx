import React from 'react';
import './Navbar.css';

const Navbar = ({ total }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', background: '#222', color: '#fff', alignItems: 'center' }}>
      <h1>⚽ Catálogo de Cracks</h1>
      <div>
        <span style={{ background: '#444', padding: '8px 12px', borderRadius: '20px' }}>
          Total Jugadores: <strong>{total}</strong>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;