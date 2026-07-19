import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import JugadorList from "./components/JugadorList";
import Footer from "./components/Footer";

function App() {
  const [totalJugadores, setTotalJugadores] = useState(0);

  return (
    <div className="app-container">
      <Navbar total={totalJugadores} />
      <Header />
      <main>
        <JugadorList onPlayersLoaded={setTotalJugadores} />
      </main>
      <Footer />
    </div>
  );
}

export default App;