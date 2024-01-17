import EmailInput from "../components/EmailInput";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";
import useLogin from "../hooks/useLogin";
import Navigation from "../components/Navigation";

const Login = () => {
  const { email, setEmail, password, setPassword, loginHandler } = useLogin();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Navigation />
      <form className="bg-gray-300 text-gray-800 w-full max-w-md p-4 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <Button handler={loginHandler} className="mt-4 bg-gray-800 text-white py-2 px-4">
          Iniciar sesión
        </Button>
      </form>
    </div>
  );
};

export default Login;
