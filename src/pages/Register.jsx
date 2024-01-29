import useRegister from "../hooks/useRegister";
import TextInput from "../components/TextInput";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleRegisterSubmit,
  } = useRegister();

  return (
    <article
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center bg-gray-100 relative"
      style={{
        backgroundImage: 'url("woman.jpg")',
        minHeight: "100vh",
      }}
    >
      <div className="absolute top-4 right-8 rounded-3xl text-center">
        <p
          className="text-5xl font-extrabold mb-2 mt-4 text-indigo-700"
          style={{ textShadow: "0 0 30px white" }}
        >
          Links World
        </p>
        <p className="text-2xl font-extrabold mb-2 mt-4 text-white">
          Descubrir el mundo
        </p>
      </div>
      <div
        className="bg-white p-8 shadow-md rounded-md max-w-md w-full"
        style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.9)" }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-slate-700 ">
          Registro
        </h2>
        <form className="space-y-4" onSubmit={handleRegisterSubmit}>
          <TextInput
            name={name}
            setName={setName}
            placeholder={"Nombre"}
          ></TextInput>
          <EmailInput
            email={email}
            setEmail={setEmail}
            placeholder={"Correo electrónico"}
          />
          <PasswordInput
            placeholder={"Contraseña"}
            password={password}
            setPassword={setPassword}
          />
          <Button>Regístrate</Button>
        </form>
        <p className="text-center mt-6 text-slate-500">
          ¿Ya tienes cuenta?{" "}
          <span className="hover:text-green-600 transition duration-300">
            <Link to="/">Inicia sesión </Link>
          </span>
        </p>
      </div>
    </article>
  );
};

export default Register;
