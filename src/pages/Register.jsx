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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Navigation />
      <div className="bg-white p-8 shadow-md rounded-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6">Registro</h2>
        <form className="space-y-4" onSubmit={handleRegisterSubmit}>
          <TextInput name={name} setName={setName}>
            Nombre
          </TextInput>
          <EmailInput email={email} setEmail={setEmail} />
          <PasswordInput password={password} setPassword={setPassword} />
          <Button handler={handleRegisterSubmit}>Regístrate</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
