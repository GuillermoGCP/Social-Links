import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-200 p-4">
      <div className="flex items-center justify-around">
        <Link
          to="/main"
          className="text-gray-800 text-lg font-semibold hover:text-gray-600 mr-4"
        >
          Inicio
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/register"
            className="text-gray-800 text-lg font-semibold hover:text-gray-600 mr-4"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
