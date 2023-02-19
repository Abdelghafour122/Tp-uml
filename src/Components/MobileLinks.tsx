import React from "react";
import { FaTimes } from "react-icons/fa";

type Props = {
  handleCloseMobileLinks: () => void;
};

const MobileLinks = ({ handleCloseMobileLinks }: Props) => {
  return (
    <div className="backdrop-blur-sm absolute left-0 top-0 w-full min-h-screen h-full flex flex-col items-center justify-center">
      <div className="w-3/4 mb-2">
        <button
          onClick={handleCloseMobileLinks}
          className="p-1 rounded-full float-right hover:bg-stone-300"
        >
          <FaTimes className="text-3xl text-stone-700" />
        </button>
      </div>
      <div className="p-3 rounded-md shadow bg-stone-300 w-3/4">
        <ul className="w-full flex flex-col items-center justify-between gap-5">
          <li>
            <button className="nav-link">Acceuil</button>
          </li>
          <li>
            <button className="nav-link">À propos</button>
          </li>
          <li>
            <button className="nav-link">Contacter</button>
          </li>
          <li>
            <button className="nav-link">Services</button>
          </li>
          <li>
            <button className="button">Rendezvous</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileLinks;
