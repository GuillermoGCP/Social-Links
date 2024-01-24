import useApiRequest from "./useApiRequest";
import { tokenContext } from "../contexs/tokenContext";
import React from "react";
import { useNavigate } from "react-router";

const useAllLinks = () => {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_SERVER_URL + "/links";
  const [state, setState] = React.useState([]);
  const [tokenState] = React.useContext(tokenContext);
  const addNewLink = (newLink) => {
    setState([...state, newLink]);
  };
  const onSuccess = (data) => {
    setState(data.data.links);
  };

  const onError = (error) => {
    console.error(error.error);
  };
  const { fetchData } = useApiRequest();
  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
      return;
    }
    const urlData = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenState}`,
      },
    };
    fetchData(url, urlData, onSuccess, onError);
  }, []);
  return { state, tokenState, setState, addNewLink };
};
export default useAllLinks;
