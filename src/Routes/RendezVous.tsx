import React from "react";

type Props = {};

// WILL BE A NEW ROUTE
const RendezVous = (props: Props) => {
  return (
    <div className="min-h-screen h-full">
      <div className="top w-full px-3 py-5 my-10">
        <div className="text flex flex-col items-center justify-center w-full">
          <h1 className="large-header text-stone-700">
            Prendre un Rendez-vous
          </h1>
          <p>Pour prendre rendez-vous, remplissez les champs ci-dessous:</p>
        </div>
        <div className="rdv-form">
          <form action="">
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RendezVous;
