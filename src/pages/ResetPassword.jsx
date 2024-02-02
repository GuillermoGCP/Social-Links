import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useApiRequest from "../hooks/useApiRequest";
import { useContext, useEffect } from "react";
import { tokenContext } from "../contexs/tokenContext";
const ResetPassword = () => {
  const { fetchData } = useApiRequest();
  const navigate = useNavigate();
  const { token } = useParams();

  //Guardo el token en el estado para poder acceder temporalmente a la página de resetear contraseña:
  const [, setTokenState] = useContext(tokenContext);
  useEffect(() => {
    setTokenState(token);
  }, [setTokenState, token]);

  const url = import.meta.env.VITE_SERVER_URL + `/checkPass/${token}`;

  const onSuccess = (data) => {
    navigate("/newPass");

    //Ahora hacemos un fetch para borrar el token de la base de datos:
    const urlDeleteToken = import.meta.env.VITE_SERVER_URL + "/deleteToken";
    const id = data.id;
    const urlDataDeleteToken = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };
    fetchData(urlDeleteToken, urlDataDeleteToken);
  };
  const urlData = {};
  const onError = (error) => {
    toast.error(error.error);
  };
  useEffect(() => {
    fetchData(url, urlData, onSuccess, onError);
  }, []);

  return;
};

export default ResetPassword;
