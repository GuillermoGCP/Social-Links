import { Link } from "react-router-dom";
import sadFaceImage from "../assets/globo3.gif";

const NoLinksToday = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <p className="font-serif text-indigo-700 text-lg ">
        ¡Vaya!, no hay enlaces publicados
      </p>
      <Link to="/main">
        <p className="font-serif text-indigo-700 text-lg hover:text-green-700">
          ¡Comparte tu preferido!
        </p>
      </Link>
      <img
        src={sadFaceImage}
        alt="Logo de la aplicación"
        className="w-1/3 h-1/3 object-contain mx-auto my-auto"
      />
    </div>
  );
};

export default NoLinksToday;
