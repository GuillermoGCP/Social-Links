import React from "react";
import useApiRequest from "../hooks/useApiRequest";
import { toast } from "react-toastify";
import { tokenContext } from "../contexs/tokenContext";

const AllLinksPage = () => {
  const url = import.meta.env.VITE_SERVER_URL + "links";
  const [state, setState] = React.useState([]);
  const [tokenState] = React.useContext(tokenContext);
  console.log("state", state);
  const onSuccess = (data) => {
    toast.success(data.data.message);
    setState(data.data.links);
  };

  const onError = (error) => {
    console.log("Estoy en el error");
    toast.error(error.message);
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

  return (
    <>
      <div>Links Publicados</div>
      <div>
        <ul>
          {state.map((link) => {
            return (
              <li key={link.id}>
                <p>{`Título: ${link.title}`}</p>
                <p>{`URL: ${link.url}`}</p>
                <p>{`Description: ${link.description}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default AllLinksPage;
