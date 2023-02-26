import React, { FC } from "react";

interface ButtonProps {
  label: string;
  name: string;
  onClick?: React.MouseEventHandler;
}

const Button2: FC<ButtonProps> = ({ label, name, onClick }) => {
  return (
    <button
      id={name}
      className="w-full bg-blue-500 rounded-md text-white font-semibold"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button2;
