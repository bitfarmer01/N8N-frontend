
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`
        px-5 py-2.5 font-semibold text-white bg-indigo-600 rounded-lg 
        hover:bg-indigo-500 focus:outline-none focus:ring-4
        focus:ring-indigo-500 focus:ring-opacity-50
        transition-all duration-300 ease-in-out
        transform active:scale-95
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
