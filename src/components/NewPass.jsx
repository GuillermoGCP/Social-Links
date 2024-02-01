import useProfileEdit from "../hooks/useProfileEdit";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";

const NewPass = () => {
  const {
    password,
    setPassword,
    handlePasswordSubmit,
    setConfirmPassword,
    error,
    confirmPassword,
  } = useProfileEdit();

  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center text-slate-700">
          Restablecer Contraseña
        </h2>

        <hr className="my-8 border-t border-gray-300" />

        <form onSubmit={handlePasswordSubmit}>
          <div className="mb-4">
            <PasswordInput
              password={password}
              setPassword={setPassword}
              placeholder={"Nueva contraseña"}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700"></label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 form-input rounded-md shadow-sm block w-full"
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <Button>Enviar</Button>
        </form>
      </div>
    </div>
  );
};

export default NewPass;
