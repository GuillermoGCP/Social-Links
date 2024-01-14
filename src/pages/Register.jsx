import useRegister from "../hooks/useRegister";
import NameForm from "../components/NameForm";
import EmailForm from "../components/EmailForm";
import PasswordForm from "../components/PasswordForm";
import ButtonForm from "../components/ButtonForm";
import Navigation from "../components/Navigation";

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
    <>
      <Navigation />
      <form>
        <NameForm name={name} setName={setName} />
        <EmailForm email={email} setEmail={setEmail} />
        <PasswordForm password={password} setPassword={setPassword} />
        <ButtonForm handler={handleRegisterSubmit} />
      </form>
    </>
  );
};

export default Register;
