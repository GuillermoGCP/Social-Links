import React from "react";
import EmailForm from "../components/EmailForm";
import ButtonForm from "../components/ButtonForm";
import PasswordForm from "../components/PasswordForm";
import useApiRequest from "../hooks/useApiRequest";
import { toast } from "react-toastify";

const Login = () => {
  const url = import.meta.env.VITE_SERVER_URL + "login";
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [tokenState, setTokenState] = React.useState();
  const onSuccess = (data) => {
    toast.success(data.message);
    setTokenState(data.data.token);
    setEmail("");
    setPassword("");
    console.log(tokenState);
  };

  const onError = (error) => {
    toast.error(error.message);
    setEmail("");
    setPassword("");
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

  return (
    <>
      <EmailForm email={email} setEmail={setEmail} />
      <PasswordForm password={password} setPassword={setPassword} />
      <ButtonForm handler={loginHandler} />
    </>
  );
};
export default Login;
