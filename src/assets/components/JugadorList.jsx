import React, { useState, useEffect } from 'react';
import JugadorCard from './JugadorCard';
import './JugadorList.css';

// Cambiamos el parámetro para que reciba exactamente "onPlayersLoaded"
const JugadorList = ({ onPlayersLoaded }) => {
  const [jugadores, setJugadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // La URL limpia que te dio éxito en tu Postman
    const urlApi = 'https://jugadores.up.railway.app/players';

    fetch(urlApi)
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo conectar con la API de jugadores.');
        }
        return response.json();
      })
      .then((resultado) => {
        if (resultado.data && resultado.data.length > 0) {
          setJugadores(resultado.data);
          // Usamos la función exacta que te pide tu App.jsx
          onPlayersLoaded(resultado.meta.total); 
        } else {
          setJugadores([]);
          onPlayersLoaded(0);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [onPlayersLoaded]); // Añadimos la dependencia correcta aquí

  // Estados visuales obligatorios del examen
  if (loading) return <p>Cargando los cracks desde la API...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (jugadores.length === 0) return <p>Sin resultados. No se encontraron jugadores.</p>;

  return (
    <div className="jugador-list-container">
      <h2>Catálogo de Jugadores</h2>
      <div className="jugador-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {jugadores.map((jugador) => (
          <JugadorCard key={jugador.id} jugador={jugador} />
        ))}
      </div>
    </div>
  );
};

export default JugadorList;