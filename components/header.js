// components/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
  const categories = [
    { name: 'Games', path: '/games' },
    { name: 'Eletrodomésticos', path: '/eletrodomesticos' },
    { name: 'Ferramentas', path: '/ferramentas' },
    { name: 'Celulares', path: '/celulares' },
    { name: 'Informática', path: '/informatica' },
    { name: 'Moda', path: '/moda' },
  ];

  return (
    <header className="bg-yellow-400 shadow-md">
      <nav className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-800 mr-6">
            {/* You can replace text with an SVG logo if available */}
            MelhoresOfertas
          </Link>
        </div>
        {/* Simple list navigation - Adapt styling as needed */}
        <ul className="flex flex-wrap space-x-4">
          <li>
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Início
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.path}>
              <Link href={category.path} className="text-gray-700 hover:text-blue-600 font-medium">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Optional: Add WhatsApp link or other elements from original header */}
        {/* <a href="#" className="text-sm text-blue-600 hover:underline">Fale conosco no WhatsApp</a> */}
      </nav>
    </header>
  );
};

export default Header;

