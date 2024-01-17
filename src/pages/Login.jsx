import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const { email, setEmail, password, setPassword, loginHandler } = useLogin();

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-100">
        <div className="lg:w-1/2 mb-8 lg:mb-0 text-center">
          <h1 className="text-5xl font-extrabold mb-2 mt-4 text-indigo-700">
            Links World
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 mt-2 text-gray-800">
            El mejor sitio para compartir, votar y descubrir sitios web
            interesantes
          </h2>
        </div>
        <div className="lg:w-1/2 bg-white p-8 lg:p-12 shadow-md rounded-md max-w-md w-full lg:ml-4">
          <h2 className="text-3xl font-semibold mb-6 text-center"></h2>
          <form className="space-y-4" onSubmit={loginHandler}>
            <Button handler={loginHandler} className="mb-7 h-16">
              Iniciar sesión
            </Button>
            <EmailInput
              email={email}
              setEmail={setEmail}
              placeholder="Correo electrónico"
            />
            <PasswordInput
              password={password}
              setPassword={setPassword}
              placeholder="Contraseña"
            />
            <Link to="/register">
              <p className="block w-2/3 mx-auto rounded-md bg-green-500 px-4 py-3 text-center text-lg font-semibold text-white shadow-sm hover:bg-green-400 focus:outline-none focus:ring focus:border-green-500 focus:ring-green-200 mt-7">
                Crea una cuenta nueva
              </p>
            </Link>
          </form>
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

export default Login;
