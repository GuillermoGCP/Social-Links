import React from "react";
import useApiRequest from "../hooks/useApiRequest";
import { toast } from "react-toastify";
import { tokenContext } from "../contexs/tokenContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  let navigate = useNavigate();
  const url = import.meta.env.VITE_SERVER_URL + "/login";
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [, setTokenState] = React.useContext(tokenContext);
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasword = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPassword(!showPassword);
  };

  const onSuccess = (data) => {
    toast.success(data.message);
    setTokenState(data.data.token);
    navigate("main");
    setEmail("");
    setPassword("");
  };

  const onError = (error) => {
    toast.error(error.error);
  };
  const { fetchData } = useApiRequest();
  const loginHandler = (e) => {
    e.preventDefault();

    const urlData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    fetchData(url, urlData, onSuccess, onError);
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    loginHandler,
    showPassword,
    togglePasword,
  };
};
export default useLogin;
