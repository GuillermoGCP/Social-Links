import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const BaseComponent = () => {
  return (
    <>
      <header className="bg-gray-100 p-4 text-center">
        <h1 className="text-5xl font-extrabold text-indigo-700">Links World</h1>
        <Navigation className="mt-2 text-sm" />
      </header>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-11/12 lg:w-3/5 mb-8 lg:mb-0 text-center">
          <div className="bg-white p-8 lg:p-12 shadow-md rounded-md w-full">
            <h2 className="text-3xl font-semibold mb-6 text-center"></h2>

            <Outlet />
          </div>
        </div>
      </div>
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
