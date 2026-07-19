import { useState } from "react";
import Navbar from "./assets/components/Navbar.jsx";
import Header from "./assets/components/Header.jsx"; 
import JugadorList from "./assets/components/JugadorList.jsx";
import Footer from "./assets/components/Footer.jsx";
import "./index.css";

function App() {
  const [totalJugadores, setTotalJugadores] = useState(0);

  return (
    <div>
      <Navbar total={totalJugadores} />
      <Header />
      <main>
        {/* Aquí está el truco: cambiamos setTotal por onPlayersLoaded */}
        <JugadorList onPlayersLoaded={setTotalJugadores} />
      </main>
      <Footer />
    </div>
  );
}

export default App;