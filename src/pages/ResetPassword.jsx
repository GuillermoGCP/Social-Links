import useResetPassword from "../hooks/useResetPassword";

const ResetPassword = () => {
  const { email, setEmail, handleEmail } = useResetPassword();

  return (
    <div>
      <h2>Restablecer Contraseña</h2>
      <form onSubmit={handleEmail}>
        <label>
          Correo Electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Enviar Enlace de Restablecimiento</button>
      </form>
    </div>
  );
};

export default ResetPassword;
