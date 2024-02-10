import { useContext } from "react";
import { tokenContext } from "../contexs/tokenContext";

const useCloseSesion = () => {
  const { setTokenState } = useContext(tokenContext);
  const closeSesionHandler = () => {
    setTokenState(null);
    localStorage.removeItem("tokenInLocalStorage");
  };
  return { closeSesionHandler };
};

export default useCloseSesion;
