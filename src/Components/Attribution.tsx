import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Attribution = () => {
  return (
    <div className="attribution py-1 w-full flex items-center justify-center gap-2">
      <p className="flex items-center gap-1 text-stone-800  text-lg font-semibold ">
        Coded with
        <AiFillHeart className="text-red-700 dark:text-red-600 text-[1.2rem]" />
        By
      </p>
      <a
        href="https://github.com/Abdelghafour122"
        target="_blank"
        rel="noreferrer noopener"
        className="link"
      >
        Abdelghafour122
      </a>
    </div>
  );
};

export default Attribution;
