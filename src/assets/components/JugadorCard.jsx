import React from 'react';
import './JugadorCard.css';

const JugadorCard = ({ jugador }) => {
  // Imagen por defecto si photoUrl viene rota o vacía
  const imagenPorDefecto = 'https://jugadores.up.railway.app/images/generic.svg';

  return (
    <div className="jugador-card" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '220px', margin: '10px', textAlign: 'center' }}>
      <img 
        src={jugador.photoUrl || imagenPorDefecto} 
        alt={jugador.name} 
        style={{ width: '100%', height: '150px', objectFit: 'contain' }}
        onError={(e) => { e.target.src = imagenPorDefecto; }}
      />
      <h3>{jugador.name}</h3>
      <p><strong>Selección:</strong> {jugador.nationalTeam}</p>
      <p><strong>Club:</strong> {jugador.currentClub}</p>
      <p><strong>Posición:</strong> {jugador.position} (#{jugador.number})</p>
      <p><strong>Edad:</strong> {jugador.age} años</p>
    </div>
  );
};

export default JugadorCard;