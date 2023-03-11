import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="">
      <h1>Créer un compte</h1>
      <form action="">
        <div className="input-cont">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>

        <div className="input-cont">
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" />
        </div>
        <div className="input-cont">
          <label htmlFor="pass-conf">Confirmez le mot de passe:</label>
          <input type="password" id="pass-conf" />
        </div>

        <button className="button">Créer compte</button>
      </form>
      <div className="link-cont">
        <p className="">Avez vous déja un compte?</p>
        <Link to="/connexion">Connexion</Link>
      </div>
    </section>
  );
};

export default SignUp;
