
import React from 'react';

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl shadow-lg p-6 md:p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex items-center mb-4">
        {icon && <div className="mr-4 flex-shrink-0">{icon}</div>}
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="text-gray-400">
        {children}
      </div>
    </div>
  );
};

export default Card;
