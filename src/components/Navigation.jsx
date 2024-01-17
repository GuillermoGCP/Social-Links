import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="text-white text-lg font-semibold hover:text-gray-300 mr-4"
        >
          Home
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
