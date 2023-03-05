import React, { useState } from "react";
import HelperText from "../Components/HelperText";
import { Malade, Sexe } from "../types";

type Props = {};
const PHONE_REGEX = /^(06|05|07)\d{8}$/;
const NAME_REGEX = /^[a-zA-Z]{4,20}$/;

// WILL BE A NEW ROUTE
const RendezVous = (props: Props) => {
  const [user, setUser] = useState<Malade>();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [phNumber, setPhNumber] = useState("");
  const [age, setAge] = useState("");

  const [sex, setSex] = useState<Sexe>();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log({
      fname,
      lname,
      phNumber,
      age,
      sex,
    });
  };

  return (
    <div className="min-h-screen h-full">
      <div className="top w-full px-3 py-5 my-10">
        <div className="text flex flex-col items-center justify-center w-full">
          <h1 className="large-header text-stone-700">
            Prendre un Rendez-vous
          </h1>
          <p>Pour prendre rendez-vous, remplissez les champs ci-dessous:</p>
        </div>
        <div className="rdv-form w-full flex items-center justify-center mt-10">
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col items-center justify-center gap-3"
          >
            <div className="input-cont">
              <label htmlFor="fname">Prénom:</label>
              <input
                className="input"
                type="text"
                id="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value.trim())}
              />
              <HelperText textContent="Le prénom contient 4 à 20 charactères alphabétiques" />
            </div>
            <div className="input-cont">
              <label htmlFor="lname">Nom:</label>
              <input
                className="input"
                type="text"
                id="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value.trim())}
              />
              <HelperText textContent="Le nom contient 4 à 20 charactères alphabétiques" />
            </div>
            <div className="input-cont">
              <label htmlFor="phone-num">Numero tel:</label>
              <input
                className="input"
                type="text"
                id="phone-num"
                value={phNumber}
                onChange={(e) => setPhNumber(e.target.value.trim())}
              />
              <HelperText textContent="Le numero de tel consiste de 10 chiffres commençant par 06/07/05" />
            </div>
            <div className="input-cont">
              <label htmlFor="age">Date de naissance:</label>
              <input
                className="input"
                type="date"
                id="age"
                max="2023-03-07"
                min="1901-01-01"
                value={age}
                onChange={(e) => setAge(e.target.value.trim())}
              />
            </div>
            <div className="input-cont">
              <label>Sexe:</label>
              <div className="w-full flex items-center justify-start gap-7">
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="sexe"
                  id="masc"
                  value={Sexe.male}
                  checked={sex === Sexe.male}
                  onChange={(e) => setSex(e.target.value.trim() as Sexe)}
                />
                <label htmlFor="masc">{Sexe.male}</label>
              </div>
              <div className="w-full flex items-center justify-start gap-7">
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="sexe"
                  id="fem"
                  value={Sexe.femelle}
                  checked={sex === Sexe.femelle}
                  onChange={(e) => setSex(e.target.value.trim() as Sexe)}
                />
                <label htmlFor="fem">{Sexe.femelle}</label>
              </div>
            </div>
            <button className="button" type="submit">
              Continuer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RendezVous;
