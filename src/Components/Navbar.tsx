import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileLinks from "./Navbar/MobileLinks";
import NavLink from "./Navbar/NavLink";

const Navbar = () => {
  const [openMobileLinks, setOpenMobileLinks] = useState(false);

  const handleOpenMobileLinks = () => {
    setOpenMobileLinks(true);
    document.body.classList.add("overflow-hidden");
  };
  const handleCloseMobileLinks = () => {
    setOpenMobileLinks(false);
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <nav className="flex w-full py-2 px-3 bg-stone-100 md:gap-24 lg:gap-40 shadow items-center justify-between relative">
      <div className="logo">
        <p className="text-xl lg:text-2xl font-bold text-green-800">Medic</p>
      </div>
      <ul className="hidden md:flex items-center justify-between md:basis-7/12 lg:basis-2/4">
        <NavLink text="Acceuil" targetPath="#intro" />
        <NavLink text="À propos" targetPath="#a-propos" />
        <NavLink text="Contacter" targetPath="#contacter" />
        <NavLink text="Services" targetPath="#services" />
      </ul>
      <button onClick={handleOpenMobileLinks} className="block md:hidden ">
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
