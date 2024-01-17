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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Navigation />
      <form className="bg-gray-300 text-gray-800 w-full max-w-md p-4 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Regístrate</h1>
        <TextInput name={name} setName={setName}>
          Nombre
        </TextInput>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <Button handler={handleRegisterSubmit} className="mt-4 bg-gray-800 text-white py-2 px-4">
          Regístrate
        </Button>
      </form>
    </div>
  );
};

export default Register;
