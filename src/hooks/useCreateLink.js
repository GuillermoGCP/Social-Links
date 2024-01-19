import React from "react";
import { toast } from "react-toastify";
import useApiRequest from "../hooks/useApiRequest";
import { tokenContext } from "../contexs/tokenContext";

const useCreateLink = () => {
  const url = import.meta.env.VITE_SERVER_URL + "/links";
  const [tokenState] = React.useContext(tokenContext);
  const [urlState, setUrlState] = React.useState("");
  const [titleState, setTitleState] = React.useState("");
  const [descriptionState, setDescriptionState] = React.useState("");
  const { fetchData } = useApiRequest();

  const onSuccess = (data) => {
    toast.success(data.data.message);
    setUrlState("");
    setTitleState("");
    setDescriptionState("");
  };

  const onError = (error) => {
    toast.error(error.error);
  };

  const linkHandler = (e) => {
    e.preventDefault();
    console.log(titleState, descriptionState, urlState);
    const urlData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenState}`,
      },
      body: JSON.stringify({
        url: urlState,
        title: titleState,
        description: descriptionState,
      }),
    };
    fetchData(url, urlData, onSuccess, onError);
  };
  return {
    linkHandler,
    urlState,
    titleState,
    descriptionState,
    setTitleState,
    setUrlState,
    setDescriptionState,
  };
};

export default useCreateLink;
