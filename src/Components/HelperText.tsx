import React from "react";

type Props = {
  textContent: string;
};

const HelperText = ({ textContent }: Props) => {
  return <p className="font-semibold italic text-red-600">{textContent}</p>;
};

export default HelperText;
