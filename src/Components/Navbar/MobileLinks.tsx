import React from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavLink from "./NavLink";

type Props = {
  handleCloseMobileLinks: () => void;
};

const MobileLinks = ({ handleCloseMobileLinks }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="backdrop-blur-sm absolute z-50 left-0 top-0 w-full min-h-screen h-full flex flex-col items-center justify-center">
      <div className="w-3/4 mb-2">
        <button
          onClick={handleCloseMobileLinks}
          className="p-1 rounded-full float-right hover:bg-stone-300"
        >
          <FaTimes className="text-3xl text-green-800/80" />
        </button>
      </div>
      <div className="p-3 rounded-md shadow bg-stone-300 w-3/4">
        <ul className="w-full flex flex-col items-center justify-between gap-5">
          <NavLink
            text="Acceuil"
            targetPath="#intro"
            clickBehavior={handleCloseMobileLinks}
          />
          <NavLink
            text="À propos"
            targetPath="#a-propos"
            clickBehavior={handleCloseMobileLinks}
          />
          <NavLink
            text="Contacter"
            targetPath="#contacter"
            clickBehavior={handleCloseMobileLinks}
          />
          <NavLink
            text="Services"
            targetPath="#services"
            clickBehavior={handleCloseMobileLinks}
          />
          <li>
            <button
              className="button"
              onClick={() => {
                handleCloseMobileLinks();
                navigate("/connexion");
              }}
            >
              Connexion
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileLinks;
