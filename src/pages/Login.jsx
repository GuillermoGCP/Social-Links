import EmailInput from "../components/EmailInput";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";
import useLogin from "../hooks/useLogin";
import Navigation from "../components/Navigation";

const Login = () => {
  const { email, setEmail, password, setPassword, loginHandler } = useLogin();

  return (
    <>
      <Navigation />
      <form>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <Button handler={loginHandler}>Iniciar sesión</Button>
      </form>
    </>
  );
};
export default Login;
