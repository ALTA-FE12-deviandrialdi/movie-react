import React, { FC } from "react";

interface ButtonProps {
  label: string;
  name: string;
  onClick?: React.MouseEventHandler;
}

const Button: FC<ButtonProps> = ({ label, name, onClick }) => {
  return (
    <button className="btn gap-1 bg-[#0369a1] text-[9px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.5"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          onClick={onClick}
        />
      </svg>
      {label}
    </button>
  );
};

export default Button;
