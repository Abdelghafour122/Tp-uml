import React, { useEffect, useState } from "react";
import Apropos from "./Apropos";
import Contacter from "./Contacter";
import Services from "./Services";

type Props = {};

const Acceuil = (props: Props) => {
  const IMG_ARR = [
    "./assets/background4.jpg",
    "./assets/background5.jpg",
    "./assets/background6.jpg",
    "./assets/background7.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextImageIndex = (currentImageIndex + 1) % IMG_ARR.length;
      setCurrentImageIndex(nextImageIndex);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <div className="Acceuil">
      <div
        id="intro"
        className={`hero relative flex items-center justify-center bg-[url('${IMG_ARR[currentImageIndex]}')] bg-no-repeat bg-center bg-cover bg-fixed py-2 px-3 transition-all duration-700`}
      >
        <div className="outlay"></div>
        <section className="text relative flex flex-col items-center justify-center gap-10 lg:gap-20 pt-5 lg:pt-10">
          <h1 className="large-header text-stone-50 text-center">
            Nous sommes là pour vos soins
          </h1>
          <p className="text-center text-base sm:text-xl w-2/3 text-stone-200">
            Notre clinique offre l'un des meilleurs traitements médicaux au
            pays. Avec notre équipe de médecins et de chirurgiens hautement
            expérimentés et spécialisés, vous êtes entre de bonnes mains.
          </p>
        </section>
      </div>
      <Apropos />
      <Services />
      <Contacter />
    </div>
  );
};

export default Acceuil;
