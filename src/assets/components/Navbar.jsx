import "./Navbar.css";

function Navbar({ total }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">⚽ Catálogo de Cracks</div>
      <div className="navbar-counter">
        Jugadores cargados: <span className="counter-badge">{total}</span>
      </div>
    </nav>
  );
}

export default Navbar;