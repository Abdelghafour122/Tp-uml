import React from "react";

type Props = {
  text: string;
  targetPath: string;
  clickBehavior?: () => void;
};

const NavLink = ({ text, targetPath, clickBehavior }: Props) => {
  return (
    <li>
      <a
        href={targetPath}
        onClick={() => {
          clickBehavior !== undefined ? clickBehavior() : null;
        }}
        className="py-1 px-2 hover:bg-green-500/30 rounded transition md:text-sm lg:text-base cursor-pointer"
      >
        {text}
      </a>
    </li>
  );
};

export default NavLink;
