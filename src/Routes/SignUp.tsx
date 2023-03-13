import React, { useState } from "react";
import { Link } from "react-router-dom";
import HelperText from "../Components/HelperText";
import { useAuthContext } from "../Contexts/UserContext";

const PWD_REGEX = /^.{6,}/;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confPwd, setConfPwd] = useState("");

  const { userSignUp, EMAIL_REGEX } = useAuthContext();

  const handleSignUp = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (EMAIL_REGEX.test(email) && PWD_REGEX.test(pwd) && confPwd === pwd) {
      await userSignUp(email, pwd)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    setEmail("");
    setPwd("");
  };
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-5xl font-bold text-stone-800 text-center">
        Créer un compte
      </h1>
      <form className="flex flex-col gap-4" action="" onSubmit={handleSignUp}>
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
          <label htmlFor="password">Mot de passe:</label>
          <input
            className="input"
            type="password"
            id="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value.trim())}
          />
          {!PWD_REGEX.test(pwd) && pwd ? (
            <HelperText textContent="Mot de passe doit contenir au moin 6 lettres!" />
          ) : null}
        </div>
        <div className="input-cont">
          <label htmlFor="pass-conf">Confirmez le mot de passe:</label>
          <input
            className="input"
            type="password"
            id="pass-conf"
            value={confPwd}
            onChange={(e) => setConfPwd(e.target.value.trim())}
          />
          {pwd !== confPwd && confPwd ? (
            <HelperText textContent="Les mots de passe ne correspondent pas" />
          ) : null}
        </div>
        <button className="button mt-4">Créer compte</button>
      </form>

      <div className="link-cont text-center">
        <p className="font-semibold">Avez vous déja un compte?</p>
        <Link className="link" to="/connexion">
          Connexion
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
