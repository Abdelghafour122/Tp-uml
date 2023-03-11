import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="">
      <h1>Connexion</h1>
      <form action="">
        <div className="input-cont">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div>
        <div className="input-cont">
          <label htmlFor="pass">Mot de passe:</label>
          <input type="password" id="pass" />
        </div>
        <button className="button">Connexion</button>
      </form>
      <div className="link-cont">
        <p className="">Vous n'avez pas de compte ?</p>
        <Link to="/creerCompte">Créer un compte</Link>
      </div>
    </section>
  );
};

export default SignIn;
