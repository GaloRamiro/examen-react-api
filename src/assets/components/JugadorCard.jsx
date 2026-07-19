import "./JugadorCard.css";

function JugadorCard({ jugador }) {
  // Imagen de respaldo por si falla photoUrl de la API
  const handleImageError = (e) => {
    e.target.src = "https://placehold.co/150x150?text=Jugador";
  };

  return (
    <div className="jugador-card">
      <div className="card-image-container">
        <img 
          src={jugador.photoUrl || "https://placehold.co/150x150?text=Jugador"} 
          alt={jugador.name} 
          onError={handleImageError}
          className="jugador-foto"
        />
        <span className="jugador-numero">#{jugador.number || "N/A"}</span>
      </div>
      <div className="card-info">
        <h3>{jugador.name}</h3>
        <p className="position">{jugador.position}</p>
        <hr />
        <p><strong>Club:</strong> {jugador.currentClub}</p>
        <p><strong>Selección:</strong> {jugador.nationalTeam}</p>
        <p><strong>Edad:</strong> {jugador.age} años ({jugador.birthDate})</p>
      </div>
    </div>
  );
}

export default JugadorCard;