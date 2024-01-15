import EmailForm from "../components/EmailForm";
import ButtonForm from "../components/ButtonForm";
import PasswordForm from "../components/PasswordForm";
import useLogin from "../hooks/useLogin";
import Navigation from "../components/Navigation";

const Login = () => {
  const { email, setEmail, password, setPassword, loginHandler } = useLogin();

  return (
    <>
      <Navigation />
      <EmailForm email={email} setEmail={setEmail} />
      <PasswordForm password={password} setPassword={setPassword} />
      <ButtonForm handler={loginHandler}>Iniciar sesión</ButtonForm>
    </>
  );
};
export default Login;
