import React from "react";
import fitness from "../assets/fitness.webp";
import health from "../assets/health.webp";
import nutrition from "../assets/nutrition.webp";
import sleep from "../assets/sleep.webp";
import supplements from "../assets/supplements.webp";

import dayRound from "../assets/24-hours.png";
import doctor from "../assets/doctor.png";
import ambulance from "../assets/ambulance.png";
import examine from "../assets/examination.png";

type Props = {};

const Services = (props: Props) => {
  return (
    <div id="services" className="bg-stone-200 my-20">
      <div className="py-10 px-3 flex flex-col items-center justify-between gap-10">
        <div className="text">
          <h1 className="smaller-header text-stone-700">Nos services</h1>
        </div>
        <div className="grid-container grid grid-cols-1 gap-5 sm:gap-4 md:gap-7 sm:grid-cols-5 lg:gap-10 w-full">
          <div className="img-cont">
            <img
              src={fitness}
              alt="physical-health"
              className="h-32 sm:h-28 md:h-32 lg:h-44"
            />
            <p className="sub-img-p">santé physique</p>
          </div>
          <div className="img-cont">
            <img
              src={health}
              alt="health"
              className="h-32 sm:h-28 md:h-32 lg:h-44"
            />
            <p className="sub-img-p">santé mentale</p>
          </div>
          <div className="img-cont">
            <img
              src={supplements}
              alt="supplements"
              className="h-32 sm:h-28 md:h-32 lg:h-44"
            />
            <p className="sub-img-p">suppléments et vitamines</p>
          </div>
          <div className="img-cont">
            <img
              src={nutrition}
              alt="nutrition"
              className="h-32 sm:h-28 md:h-32 lg:h-44"
            />
            <p className="sub-img-p">nutrition</p>
          </div>
          <div className="img-cont">
            <img
              src={sleep}
              alt="sleep"
              className="h-32 sm:h-28 md:h-32 lg:h-44"
            />
            <p className="sub-img-p">sommeil</p>
          </div>
        </div>
        <div className="second-grid-container grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 lg:gap-7 w-full mt-10 md:mt-16 lg:mt-28">
          <div className="service flex flex-col items-center justify-start gap-2 md:gap-5">
            <img src={ambulance} alt="ambulance" className="h-20 md:h-28" />
            <div className="text text-center flex flex-col items-center justify-start">
              <h2 className="text-lg font-semibold">Services d'urgence</h2>
              <p className="text-sm sm:text-base w-full sm:w-3/4">
                Nous sommes toujours prêts pour les urgences, à tout moment et
                en toutes circonstances
              </p>
            </div>
          </div>
          <div className="service flex flex-col items-center justify-start gap-2 md:gap-5">
            <img src={doctor} alt="doctor" className="h-20 md:h-28" />
            <div className="text text-center flex flex-col items-center justify-start">
              <h2 className="text-lg font-semibold">Médecins qualifiés</h2>
              <p className="text-sm sm:text-base w-full sm:w-3/4">
                Nos médecins compétents essaieront toujours de fournir le
                meilleur traitement possible
              </p>
            </div>
          </div>
          <div className="service flex flex-col items-center justify-start gap-2 md:gap-5">
            <img src={dayRound} alt="24-hours" className="h-20 md:h-28" />
            <div className="text text-center flex flex-col items-center justify-start">
              <h2 className="text-lg font-semibold">
                Service 24 heures sur 24
              </h2>
              <p className="text-sm sm:text-base w-full sm:w-3/4">
                Notre personnel est toujours présent, pour fournir des soins à
                tout moment nécessaire
              </p>
            </div>
          </div>
          <div className="service flex flex-col items-center justify-start gap-2 md:gap-5">
            <img src={examine} alt="examination" className="h-20 md:h-28" />
            <div className="text text-center flex flex-col items-center justify-start">
              <h2 className="text-lg font-semibold">Bilan extérieur</h2>
              <p className="text-sm sm:text-base w-full sm:w-3/4">
                Notre objectif est de nous assurer que nos patients reçoivent la
                meilleure aide
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="prio relative w-full flex items-center justify-center bg-[url('./assets/background8.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
        <div className="outlay"></div>
        <div className="content relative py-7 px-10 my-16 flex flex-col items-center justify-center gap-5 lg:gap-10">
          <h1 className="text-center large-header text-stone-50">
            Votre santé est notre priorité
          </h1>
          <p className="text-center text-base sm:text-xl w-2/3 text-stone-200">
            Chez CLINICAL, nous établissons des normes élevées de qualité, de
            recherche et de transparence pour ce que nous partageons,
            garantissant que vous n'avez accès qu'au meilleur.
          </p>
          <button className="button">Rendezvous</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
