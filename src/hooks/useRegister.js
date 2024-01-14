import React from "react";
import useApiRequest from "../hooks/useApiRequest";
import { toast } from "react-toastify";
const useRegister = () => {
  const url = import.meta.env.VITE_SERVER_URL + `register`;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSuccess = (data) => {
    toast.success(data.message);
    setName("");
    setEmail("");
    setPassword("");
  };

  const onError = (error) => {
    toast.error(error.error);
    setName("");
    setEmail("");
    setPassword("");
  };

  const { fetchData } = useApiRequest();

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
