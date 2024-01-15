import React, { useContext } from "react";
import { toast } from "react-toastify";
import useApiRequest from "../hooks/useApiRequest";
import { tokenContext } from "../contexs/tokenContext";

const useCreateLink = () => {
  const url = import.meta.env.VITE_SERVER_URL + "links";
  const [urlState, setUrlState] = React.useState("");
  const [titleState, setTitleState] = React.useState("");
  const [descriptionState, setDescriptionState] = React.useState("");
  const onSuccess = (data) => {
    toast.success(data.message);
    setUrlState("");
    setTitleState("");
    setDescriptionState("");
  };

  const onError = (error) => {
    toast.error(error.error);
    setUrlState("");
    setTitleState("");
    setDescriptionState("");
  };
  const { fetchData } = useApiRequest();
  const { tokenState } = useContext(tokenContext);
  const linkHandler = (e) => {
    e.preventDefault();
    const urlData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: tokenState,
      },
      body: JSON.stringify({ setUrlState, setTitleState, setDescriptionState }),
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
