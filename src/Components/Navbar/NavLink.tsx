import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  text: string;
  targetPath: string;
  clickBehavior?: () => void;
};

const NavLink = ({ text, targetPath, clickBehavior }: Props) => {
  const navigate = useNavigate();
  return (
    <li>
      <button
        onClick={() => {
          navigate(targetPath);
          clickBehavior !== undefined ? clickBehavior() : null;
        }}
        className="py-1 px-2 hover:bg-green-500/30 rounded transition md:text-sm lg:text-base"
      >
        {text}
      </button>
    </li>
  );
};

export default NavLink;
