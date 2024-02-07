import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-200 via-gray-250 to-gray-300 p-4 shadow-md">
      <div className="flex items-center justify-around">
        <Link
          to="/main"
          onClick={() => handleLinkClick("main")}
          className={`text-lg font-semibold hover:text-blue-700 mr-4 ${
            activeLink === "main" ? "text-blue-500" : "text-gray-800"
          }`}
        >
          Home
        </Link>
        <Link
          to="/linksToday"
          onClick={() => handleLinkClick("linksToday")}
          className={`text-lg font-semibold hover:text-blue-700 mr-4 ${
            activeLink === "linksToday" ? "text-blue-500" : "text-gray-800"
          }`}
        >
          Today
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/register"
            onClick={() => handleLinkClick("register")}
            className={`text-lg font-semibold hover:text-blue-700 mr-4 ${
              activeLink === "register" ? "text-blue-500" : "text-gray-800"
            }`}
          >
            Add
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
