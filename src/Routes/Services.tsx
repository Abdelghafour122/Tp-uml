import React from "react";
import fitness from "../assets/fitness.webp";
import health from "../assets/health.webp";
import nutrition from "../assets/nutrition.webp";
import sleep from "../assets/sleep.webp";
import supplements from "../assets/supplements.webp";

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
        <div className="second-grid-container grid grid-cols-2 w-full">
          <div className="service"></div>
          <div className="service"></div>
          <div className="service"></div>
          <div className="service"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
