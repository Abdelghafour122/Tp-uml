import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MobileLinks from "./Navbar/MobileLinks";
import NavLink from "./Navbar/NavLink";

const Navbar = () => {
  const [openMobileLinks, setOpenMobileLinks] = useState(false);
  const navigate = useNavigate();

  const handleOpenMobileLinks = () => {
    setOpenMobileLinks(true);
    document.body.classList.add("overflow-hidden");
  };
  const handleCloseMobileLinks = () => {
    setOpenMobileLinks(false);
    document.body.classList.remove("overflow-hidden");
  };

  // FETCH THE ROUTE FROM THE LINK
  // IF IT'S RENDEZVOUS, HIDE THE NAVLINKS & THE MOBILELINKS

  return (
    <nav className="flex w-full py-2 px-3 bg-stone-100 md:gap-24 lg:gap-40 shadow items-center justify-between relative">
      <div className="logo">
        {/* <p className="text-xl lg:text-2xl font-bold text-green-800 uppercase">
          Clinical
        </p> */}
        <button
          className="text-xl lg:text-2xl font-bold text-green-800 uppercase"
          onClick={() => navigate("/")}
        >
          Clinical
        </button>
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
      <button
        className="button hidden md:block"
        onClick={() => navigate("/rendez-vous")}
      >
        Rendezvous
      </button>
      {openMobileLinks ? (
        <MobileLinks handleCloseMobileLinks={handleCloseMobileLinks} />
      ) : (
        false
      )}
    </nav>
  );
};

export default Navbar;
