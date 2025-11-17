import React from 'react';
import HomeIcon from './icons/HomeIcon';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gray-800/70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-3">
          <HomeIcon className="w-8 h-8 text-indigo-400" />
          <h1 className="text-xl font-bold text-white tracking-wider">{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;