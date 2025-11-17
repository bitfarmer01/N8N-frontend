
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gray-800/70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-3">
          <svg
            className="w-8 h-8 text-indigo-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
             <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <h1 className="text-xl font-bold text-white tracking-wider">{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
