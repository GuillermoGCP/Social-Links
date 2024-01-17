import { useState } from "react";

const BaseComponent = () => {
  const [dynamicContent, setDynamicContent] = useState("Contenido por defecto");

  const handleContentChange = () => {
    setDynamicContent("Nuevo contenido dinámico");
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <header className="bg-gray-800 text-white w-full">
        <div className="p-4">
          <h1 className="m-0 text-center">TryCaff</h1>
        </div>
      </header>
      <div className="flex-1 w-full bg-gray-100 min-h-full">
        <div className="w-full p-4">
          <p>{dynamicContent}</p>
          <button
            onClick={handleContentChange}
            className="bg-blue-500 text-white py-2 px-4 mt-4"
          >
            Cambiar Contenido
          </button>
        </div>
      </div>
      <footer className="bg-gray-800 text-white w-full">
        <div className="p-2">
          <p>Footer</p>
        </div>
      </footer>
    </div>
  );
};

export default BaseComponent;
