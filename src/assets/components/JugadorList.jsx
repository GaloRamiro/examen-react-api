import { useState, useEffect } from "react";
import JugadorCard from "./JugadorCard";
import "./JugadorList.css";

function JugadorList({ onPlayersLoaded }) {
  const [jugadores, setJugadores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jugadores.up.railway.app/players")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al conectar con la API de jugadores");
        }
        return response.json();
      })
      .then((res) => {
        // EXAMEN: Extraemos la propiedad .data que contiene el arreglo
        const listaJugadores = res.data || [];
        setJugadores(listaJugadores);
        onPlayersLoaded(listaJugadores.length); // Actualiza el Navbar
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, [onPlayersLoaded]);

  if (cargando) {
    return <div className="estado-mensaje cargando">Cargando catálogo de jugadores...</div>;
  }

  if (error) {
    return <div className="estado-mensaje error">⚠️ Error: {error}</div>;
  }

  if (jugadores.length === 0) {
    return <div className="estado-mensaje vacio">No se encontraron jugadores en la plantilla.</div>;
  }

  return (
    <div className="jugadores-grid">
      {jugadores.map((jugador) => (
        <JugadorCard key={jugador.id} jugador={jugador} />
      ))}
    </div>
  );
}

export default JugadorList;