import React from "react";

type Props = {};
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row w-full py-2 px-3 bg-stone-100 gap-20 md:gap-24 lg:gap-40 shadow items-center justify-between">
      <div className="logo flex flex-col items-center justify-center gap-3">
        <img src="/hospital.png" alt="logo" />
        <p className="text-center">CLINICAL, ©2023 Tous Droits Réservés.</p>
      </div>
      <div className="media text-center sm:text-left">
        <p>Trouvez nous dans:</p>
        <ul className="flex items-center justify-between gap-5">
          <li>
            <a href="#">
              <FaInstagram className="text-4xl text-green-800" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin className="text-4xl text-green-800" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter className="text-4xl text-green-800" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebook className="text-4xl text-green-800" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
