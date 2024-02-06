import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <main
        className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 bg-cover "
        style={{
          backgroundImage: 'url("clouds2.jpg")',
          minHeight: "100vh",
        }}
      >
        <div className="text-center mb-56">
          <p className="font-semibold text-indigo-600 text-2xl">404</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl">
            Página no encontrada
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lo siento, no hemos encontrado la página que está buscando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/main">
              <p className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Ve al inicio
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
