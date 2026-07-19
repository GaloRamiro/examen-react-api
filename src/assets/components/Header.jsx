import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header style={{ padding: '30px 20px', textAlign: 'center', background: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
      <h2>Panel de Control - Selección de Jugadores</h2>
      <p>Consulta en tiempo real los datos actualizados de los futbolistas desde nuestra API de Railway.</p>
    </header>
  );
};

export default Header;