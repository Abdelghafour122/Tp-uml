import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-5xl font-bold text-stone-800">Connexion</h1>
      <form className="flex flex-col gap-4" action="">
        <div className="input-cont">
          <label htmlFor="email">Email:</label>
          <input className="input" type="email" name="email" />
        </div>
        <div className="input-cont">
          <label htmlFor="pass">Mot de passe:</label>
          <input className="input" type="password" id="pass" />
        </div>
        <button className="button mt-4">Connexion</button>
      </form>

      <div className="link-cont text-center">
        <p className="font-semibold">Vous n'avez pas de compte ?</p>
        <Link className="link" to="/creerCompte">
          Créer un compte
        </Link>
      </div>
    </section>
  );
};

export default SignIn;
