import useResetPassword from "../hooks/useResetPassword";

const ResetPasswordBox = () => {
  const { email, setEmail, handleEmail } = useResetPassword();

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Restablecer Contraseña</h2>
      <form onSubmit={handleEmail} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Correo Electrónico:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-300 hover:scale-95"
        >
          Enviar enlace al correo electrónico
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordBox;
