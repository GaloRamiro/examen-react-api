import { useState, useEffect } from 'react';
import JugadorCard from './JugadorCard';
import './JugadorList.css';

const JugadorList = ({ onPlayersLoaded }) => {
  const [jugadores, setJugadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, [onPlayersLoaded]);

  if (loading) return <div className="estado-contenedor"><p>Cargando los cracks desde la API...</p></div>;
  if (error) return <div className="estado-contenedor"><p className="error-box">Error: {error}</p></div>;
  if (jugadores.length === 0) return <div className="estado-contenedor"><p>Sin resultados. No se encontraron jugadores.</p></div>;

  return (
    <div className="jugador-list-container">
      <h2 className="list-title">Catálogo de Jugadores</h2>
      <div className="jugador-grid">
        {jugadores.map((jugador) => (
          <JugadorCard key={jugador.id} jugador={jugador} />
        ))}
      </div>
    </div>
  );
};

export default JugadorList;