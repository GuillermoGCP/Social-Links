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
    tokenState,
  } = useProfileEdit();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);
  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center text-slate-700">
          Editar Perfil
        </h2>
        <form className="space-y-4" onSubmit={handleProfileEditSubmit}>
          <TextInput name={name} setName={setName} placeholder={"Nombre"} />
          <EmailInput
            email={email}
            setEmail={setEmail}
            placeholder={"Correo electrónico"}
          />
          <PasswordInput
            password={password}
            setPassword={setPassword}
            placeholder={"contraseña"}
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Foto de Perfil
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePicture(e.target.files[0])}
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
          <Button handler={handleProfileEditSubmit}>Guardar Cambios</Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileUserEdit;
