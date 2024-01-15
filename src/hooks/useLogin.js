import React from "react";
import useApiRequest from "../hooks/useApiRequest";
import { toast } from "react-toastify";
import { tokenContext } from "../contexs/tokenContext";

const useLogin = () => {
  const url = import.meta.env.VITE_SERVER_URL + "login";
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [, setTokenState] = React.useContext(tokenContext);

  const onSuccess = (data) => {
    toast.success(data.message);
    setTokenState(data.data.token);
    setEmail("");
    setPassword("");
  };

  const onError = (error) => {
    toast.error(error.message);
  };
  const { fetchData } = useApiRequest();
  const loginHandler = () => {
    const urlData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    fetchData(url, urlData, onSuccess, onError);
  };
  return { email, setEmail, password, setPassword, loginHandler };
};
export default useLogin;
