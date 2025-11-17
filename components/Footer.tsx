
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800/30 py-6 mt-16 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <p>&copy; {currentYear} React Starter App. All rights reserved.</p>
        <p className="text-sm mt-1">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
