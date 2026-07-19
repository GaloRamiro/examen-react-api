import { useState } from "react";
import Navbar from "./assets/components/Navbar";
import Header from "./assets/components/Header"; 
import JugadorList from "./assets/components/JugadorList";
import Footer from "./assets/components/Footer";
import "./index.css";

function App() {
  const [totalJugadores, setTotalJugadores] = useState(0);

  return (
    <div className="app-layout">
      <Navbar total={totalJugadores} />
      <Header />
      <main className="main-content">
        <JugadorList onPlayersLoaded={setTotalJugadores} />
      </main>
      <Footer />
    </div>
  );
}

export default App;