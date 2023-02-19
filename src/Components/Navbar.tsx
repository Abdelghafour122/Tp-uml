import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileLinks from "./MobileLinks";

const Navbar = () => {
  const [openMobileLinks, setOpenMobileLinks] = useState(false);

  const handleOpenMobileLinks = () => setOpenMobileLinks(true);
  const handleCloseMobileLinks = () => setOpenMobileLinks(false);
  return (
    <nav className="flex w-full py-3 px-3 bg-stone-100 gap-40 shadow items-center justify-between relative">
      <div className="logo">
        <p className="text-2xl font-bold text-green-800">Medic</p>
      </div>
      <ul className="hidden md:flex items-center justify-between w-full">
        <li>
          <button>Acceuil</button>
        </li>
        <li>
          <button>À propos</button>
        </li>
        <li>
          <button>Contacter</button>
        </li>
        <li>
          <button>Services</button>
        </li>
      </ul>
      <button onClick={handleOpenMobileLinks} className="block md:hidden">
        <FaBars className="text-green-800/80 hover:text-green-800 text-3xl" />
      </button>
      <button className="button hidden md:block">Rendezvous</button>
      {openMobileLinks ? (
        <MobileLinks handleCloseMobileLinks={handleCloseMobileLinks} />
      ) : (
        false
      )}
    </nav>
  );
};

export default Navbar;
