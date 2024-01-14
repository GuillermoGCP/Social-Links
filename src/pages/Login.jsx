import { useState } from "react";

const Login = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const autenticarUsuario = async (e) => {
    e.preventDefault();
    const postBody = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    try {
      const res = await fetch("http://localhost:3001/users/login", {
        body: JSON.stringify(postBody),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const body = await res.json();
        setStatusMessage(`Token del servidor: ${body.data.token}`);
      } else {
        const body = await res.json();
        console.log("Error de datos", body);
        setStatusMessage(`Error: ${body.message}`);
      }
    } catch (error) {
      console.error("Error al acceder");
      console.error(error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      {statusMessage ? (
        <div>{statusMessage}</div>
      ) : (
        <div>Introduce los datos</div>
      )}

      <form onSubmit={autenticarUsuario}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <input type="submit" value="Iniciar sesión" />
        </div>
      </form>
    </>
  );
};

export default Login;
