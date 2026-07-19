import './JugadorCard.css';

const JugadorCard = ({ jugador }) => {
  const imagenPorDefecto = 'https://jugadores.up.railway.app/images/generic.svg';

  return (
    <div className="jugador-card">
      <div className="image-container">
        <img 
          className="card-img"
          src={jugador.photoUrl || imagenPorDefecto} 
          alt={jugador.name} 
          onError={(e) => { e.target.src = imagenPorDefecto; }}
        />
      </div>
      <div className="card-info">
        <h3 className="card-name">{jugador.name}</h3>
        <span className="card-posicion">{jugador.position} (#{jugador.number})</span>
        <p className="info-line"><span>Selección:</span> <strong>{jugador.nationalTeam}</strong></p>
        <p className="info-line"><span>Club:</span> <strong>{jugador.currentClub}</strong></p>
        <p className="info-line"><span>Edad:</span> <strong>{jugador.age} años</strong></p>
      </div>
    </div>
  );
};

export default JugadorCard;