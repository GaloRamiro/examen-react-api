

import './Footer.css';

const Footer = () => {
  return (
    <footer style={{ padding: '15px', textAlign: 'center', background: '#222', color: '#aaa', marginTop: '30px' }}>
      <p>&copy; {new Date().getFullYear()} - Examen Práctico de React - Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;