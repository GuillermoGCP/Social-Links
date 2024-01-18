import React from "react";
import useApiRequest from "../hooks/useApiRequest";
import { toast } from "react-toastify";
import { tokenContext } from "../contexs/tokenContext";
import OneLink from "../components/OneLink";

const MainPage = () => {
  const url = import.meta.env.VITE_SERVER_URL + "links";

  const [state, setState] = React.useState([]);

  const [tokenState] = React.useContext(tokenContext);
  const onSuccess = (data) => {
    setState(data.data.links);
  };

  const onError = (error) => {
    toast.error(error.error);
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

  {
    if (!tokenState) {
      toast.warning("Por favor, inicia sesión");
    } else {
      return (
        <>
          <div>Links Publicados</div>
          <div>
            <ul>
              {state.map((link) => {
                return <OneLink key={link.id} link={link} />;
              })}
            </ul>
          </div>
        </>
      );
    }
  }
};

export default MainPage;
