import useProfileEdit from "../hooks/useProfileEdit";
import TextInput from "../components/TextInput";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileUserEdit = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    profilePicture,
    setProfilePicture,
    biography,
    setBio,
    handleProfileEditSubmit,
    handlePasswordSubmit,
    setConfirmPassword,
    error,
    tokenState,
    confirmPassword,
  } = useProfileEdit();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);
  return (
    <div className="min-h-screen p-10 mt-10">
      <div className="bg-white p-8 shadow-md rounded-md max-w-md w-full mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-slate-700">
          Edita tus datos
        </h2>
        <form className="space-y-4" onSubmit={handleProfileEditSubmit}>
          <TextInput name={name} setName={setName} placeholder={"Nombre"} />
          <EmailInput
            email={email}
            setEmail={setEmail}
            placeholder={"Correo electrónico"}
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Foto de Perfil
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePicture(e.target.files[0])}
              className="mt-1 text-transparent"
              style={{ width: "155px" }}
            />
            {profilePicture && (
              <img
                src={URL.createObjectURL(profilePicture)}
                alt="Previsualización"
                className="mt-2 rounded-md"
                style={{ maxWidth: "100%" }}
              />
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Biografía
            </label>
            <textarea
              value={biography}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              className="form-input rounded-md shadow-sm mt-1 block w-full"
              placeholder="Escribe tu biografía aquí..."
            />
          </div>
          <div className="hover:scale-95">
            <Button handler={handleProfileEditSubmit}>Guardar Cambios</Button>
          </div>
        </form>
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
            <Button>Resetear contraseña</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUserEdit;
