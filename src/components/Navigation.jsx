import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-gray-200 p-4">
      <div className="flex items-center justify-around">
        <Link
          to="/main"
          onClick={() => handleLinkClick('main')}
          className={`text-lg font-semibold hover:text-blue-700 mr-4 ${
            activeLink === 'main' ? 'text-blue-500' : 'text-gray-800'
          }`}
        >
          Inicio
        </Link>
        <Link
          to="/linksToday"
          onClick={() => handleLinkClick('linksToday')}
          className={`text-lg font-semibold hover:text-blue-700 mr-4 ${
            activeLink === 'linksToday' ? 'text-blue-500' : 'text-gray-800'
          }`}
        >
          Links Hoy
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/register"
            onClick={() => handleLinkClick('register')}
            className={`text-lg font-semibold hover:text-blue-700 mr-4 ${
              activeLink === 'register' ? 'text-blue-500' : 'text-gray-800'
            }`}
          >
            Añadir cuenta
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
