import { Route, Routes } from "react-router-dom";
import "./App.css";
import Attribution from "./Components/Attribution";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Acceuil from "./Routes/Acceuil";
import RendezVous from "./Routes/RendezVous";

function App() {
  return (
    <div className="App h-full">
      <Navbar />
      <Routes>
        <Route element={<Acceuil />} index path="/" />
        <Route element={<RendezVous />} path="/rendez-vous" />
      </Routes>
      <Footer />
      <Attribution />
    </div>
  );
}

export default App;
