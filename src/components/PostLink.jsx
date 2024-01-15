import NameForm from "./NameForm";
import InputUrl from "./InputUrl";
import ButtonForm from "./ButtonForm";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import useApiRequest from "../hooks/useApiRequest";
import { tokenContext } from "../contexs/tokenContext";

const PostLink = () => {
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
  return (
    <>
      <InputUrl urlState={urlState} setUrlState={setUrlState}>
        Url
      </InputUrl>
      <NameForm titleState={titleState} setTitleState={setTitleState}>
        Title
      </NameForm>
      <NameForm>
        {" "}
        descriptionState ={descriptionState} setDescriptionState=
        {setDescriptionState} Description
      </NameForm>
      <ButtonForm handler={linkHandler}>Crea tu link</ButtonForm>
    </>
  );
};

export default PostLink;
