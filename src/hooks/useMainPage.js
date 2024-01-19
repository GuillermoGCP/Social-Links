import useApiRequest from "../hooks/useApiRequest";
import { tokenContext } from "../contexs/tokenContext";
import React from "react";

const useMainPage = () => {
  const url = import.meta.env.VITE_SERVER_URL + "links";
  const [state, setState] = React.useState([]);
  const [tokenState] = React.useContext(tokenContext);

  const onSuccess = (data) => {
    setState(data.data.links);
  };

  const onError = (error) => {
    console.error(error.error);
  };
  const { fetchData } = useApiRequest();
  React.useEffect(() => {
    const urlData = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenState}`,
      },
    };
    fetchData(url, urlData, onSuccess, onError);
  }, []);
  return { state, tokenState, setState };
};
export default useMainPage;
