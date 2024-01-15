import useRegister from "../hooks/useRegister";
import TextInput from "../components/TextInput";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
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
        <TextInput name={name} setName={setName}>
          Name
        </TextInput>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <Button handler={handleRegisterSubmit}>Regístrate</Button>
      </form>
    </>
  );
};

export default Register;
