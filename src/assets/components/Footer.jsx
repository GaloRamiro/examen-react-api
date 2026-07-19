import "./Footer.css";

function Footer() {
  const anioActual = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {anioActual} - Examen Práctico de React | Panel de Control de Jugadores</p>
    </footer>
  );
}

export default Footer;