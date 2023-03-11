import { Route, Routes } from "react-router-dom";
import "./App.css";
import Attribution from "./Components/Attribution";
import ErrorPage from "./Components/ErrorPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import PrivateLoggedRoute from "./PrivateLoggedRoute";
import PrivateUnloggedRoute from "./PrivateUnloggedRoute";
import Acceuil from "./Routes/Acceuil";
import RendezVous from "./Routes/RendezVous";
import SignIn from "./Routes/SignIn";
import SignUp from "./Routes/SignUp";

function App() {
  return (
    <div className="App h-full">
      <Navbar />
      <Routes>
        <Route element={<Acceuil />} index path="/" />
        <Route element={<PrivateUnloggedRoute />}>
          <Route element={<SignIn />} path="/connexion" />
        </Route>
        <Route element={<PrivateUnloggedRoute />}>
          <Route element={<SignUp />} path="/creerCompte" />
        </Route>
        <Route element={<PrivateLoggedRoute />}>
          <Route element={<RendezVous />} path="/rendez-vous" />
        </Route>
        <Route element={<ErrorPage />} path="*" />
      </Routes>
      <Footer />
      <Attribution />
    </div>
  );
}

export default App;
