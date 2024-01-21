import { Outlet } from "react-router-dom";

const BaseComponent = () => {
  return (
    <>
      
            <Outlet />
     
      <footer className="mt-8 text-gray-600 text-sm text-center mb-8">
        <p>
          Creado y diseñado por Guillermo Cerviño Porto, Ruth Villa Valeiro,
          Louis del Saz y Rosdany Guera &copy; 2024
        </p>
      </footer>
    </>
  );
};

export default BaseComponent;
