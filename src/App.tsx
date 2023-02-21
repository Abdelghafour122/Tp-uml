import { Route, Routes } from "react-router-dom";
import "./App.css";
import Attribution from "./Components/Attribution";
import Navbar from "./Components/Navbar";
import Acceuil from "./Routes/Acceuil";
import Apropos from "./Routes/Apropos";
import Contacter from "./Routes/Contacter";
import Services from "./Routes/Services";

function App() {
  return (
    <div className="App h-full">
      <Navbar />
      <Routes>
        <Route element={<Acceuil />} index path="/" />
        {/* <Route element={<Apropos />} path="/a-propos" />
        <Route element={<Contacter />} path="/contacter" />
        <Route element={<Services />} path="/services" /> */}
      </Routes>
      <Attribution />
    </div>
  );
}

export default App;
