import React from "react";
import useApiRequest from "../hooks/useApiRequest";
import { tokenContext } from "../contexs/tokenContext";
import OneLink from "../components/OneLink";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_SERVER_URL + "links";
  const [state, setState] = React.useState([]);
  const [tokenState] = React.useContext(tokenContext);
  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);

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
  }, [tokenState, fetchData, url]);

  {
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
};

export default MainPage;
