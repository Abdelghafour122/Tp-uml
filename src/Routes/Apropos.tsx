import React from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/old-vaccine.webp";
import { useAuthContext } from "../Contexts/UserContext";
type Props = {};

const Apropos = (props: Props) => {
  const navigate = useNavigate();
  const { currentUser } = useAuthContext();
  return (
    <div
      id="a-propos"
      className="py-10 px-3 flex flex-col md:flex-row items-center justify-between gap-10 my-20 xl:my-32"
    >
      <img
        src={bgImg}
        alt="doctor-patient"
        className="md:h-60 lg:h-80 xl:h-96 rounded-md"
      />
      <div className="top-text basis-2/4 flex flex-col items-start justify-between gap-6">
        <h1 className="smaller-header text-stone-700">Nous sommes CLINICAL</h1>
        <p className="text-base sm:text-xl md:text-lg w-full">
          Soins quotidiens ou qui changent la vie. Nous sommes là quand vous
          avez besoin de nous.
          <br />
          <br />
          Découvrez comment vous pouvez garder vos poumons en bonne santé et
          comment atteindre l'équilibre général en alignant la nutrition, la
          santé mentale et physique.
        </p>
        <div className="buttons w-full flex items-center justify-start gap-5 md:gap-7 lg:gap-10">
          <button
            onClick={() => {
              currentUser ? navigate("/rendez-vous") : navigate("/connexion");
            }}
            className="button"
          >
            Rendezvous
          </button>
          <a href="#contacter" className="reverse-button">
            Contactez nous
          </a>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
