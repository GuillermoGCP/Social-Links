import React from "react";
import useApiRequest from "../hooks/useApiRequest";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { tokenContext } from "../contexs/tokenContext";
const useRegister = () => {
  let navigate = useNavigate();
  const url = import.meta.env.VITE_SERVER_URL + `/register`;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { fetchData } = useApiRequest();
  const { setTokenState } = React.useContext(tokenContext);

  //Dentro del onSuccess del register hago login con los datos de usuario registrado y redirijo a main:
  const onSuccess = (data) => {
    toast.success(data.message);
    const urlData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.data.email,
        password: data.data.password,
      }),
    };
    const url2 = import.meta.env.VITE_SERVER_URL + "/login";
    const onSuccess = (data) => {
      setTokenState(data.data.token);
      navigate("/main");
    };
    const onError = (error) => {
      console.log(error);
    };
    fetchData(url2, urlData, onSuccess, onError);
    setName("");
    setEmail("");
    setPassword("");
  };

  const onError = (error) => {
    toast.error(error.error);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    const urlData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    };

    fetchData(url, urlData, onSuccess, onError);
  };
  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleRegisterSubmit,
  };
};
export default useRegister;
