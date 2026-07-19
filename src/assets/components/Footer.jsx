import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} - Examen Práctico de React - Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;