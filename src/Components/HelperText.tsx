import React from "react";

type Props = {
  textContent: string;
};

const HelperText = ({ textContent }: Props) => {
  return <p className="">{textContent}</p>;
};

export default HelperText;
