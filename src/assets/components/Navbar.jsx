import './Navbar.css';

const Navbar = ({ total }) => {
  return (
    <nav className="navbar-custom">
      <h1 className="navbar-brand">⚽ Catálogo de Cracks</h1>
      <div className="badge-contador">
        Total Jugadores: <strong>{total}</strong>
      </div>
    </nav>
  );
};

export default Navbar;