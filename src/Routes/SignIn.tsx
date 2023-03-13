import React, { useState } from "react";
import { Link } from "react-router-dom";
import HelperText from "../Components/HelperText";
import { useAuthContext } from "../Contexts/UserContext";

const SignIn = () => {
  const { userSignIn, EMAIL_REGEX } = useAuthContext();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSignIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await userSignIn(email, pwd).then(() => console.log("done"));
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-5xl font-bold text-stone-800 text-center">
        Connexion
      </h1>
      <form className="flex flex-col gap-4" action="" onSubmit={handleSignIn}>
        <div className="input-cont">
          <label htmlFor="email">Email:</label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />
          {!EMAIL_REGEX.test(email) && email ? (
            <HelperText textContent="Email invalide!" />
          ) : null}
        </div>
        <div className="input-cont">
          <label htmlFor="pass">Mot de passe:</label>
          <input
            className="input"
            type="password"
            id="pass"
            value={pwd}
            onChange={(e) => setPwd(e.target.value.trim())}
          />
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
