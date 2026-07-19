import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <h2 className="header-title">Panel de Control - <span>Selección de Jugadores</span></h2>
      <p className="header-desc">Consulta en tiempo real los datos actualizados de los futbolistas desde nuestra API de Railway.</p>
    </header>
  );
};

export default Header;