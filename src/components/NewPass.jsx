import React, { useContext } from "react";
import useProfileEdit from "../hooks/useProfileEdit";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import { tokenContext } from "../contexs/tokenContext";

const NewPass = () => {
  const navigate = useNavigate();
  const [tokenState] = useContext(tokenContext);
  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);
  const {
    password,
    setPassword,
    handlePasswordSubmit,
    setConfirmPassword,
    error,
    confirmPassword,
    mainButton,
  } = useProfileEdit();

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center bg-gray-100 relative"
      style={{
        backgroundImage: 'url("clouds2.jpg")',
        minHeight: "100vh",
      }}
    >
      {mainButton && (
        <Link
          to="/main"
          className="text-blue-500 p-4 text-lg hover:scale-105 transition-transform"
        >
          Ve al inicio
        </Link>
      )}
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
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <div className="hover:scale-95">
            <Button>Enviar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPass;
