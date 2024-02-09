import React from "react";
import { toast } from "react-toastify";
import useApiRequest from "../hooks/useApiRequest";
import { tokenContext } from "../contexs/tokenContext";

const useSendComment = (link) => {
  const url = import.meta.env.VITE_SERVER_URL + "/comments";
  const [tokenState] = React.useContext(tokenContext);
  const [comment, setComment] = React.useState("");
  const { fetchData } = useApiRequest();

  const onSuccess = (data) => {
    toast.success(data.message);
    setComment("");
  };

  const onError = (error) => {
    toast.error(error.error);
  };

  const commentHandler = (e) => {
    e.preventDefault();
    const urlData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenState}`,
      },
      body: JSON.stringify({
        linkId: link.id,
        comment: comment,
      }),
    };
    fetchData(url, urlData, onSuccess, onError);
  };
  return {
    commentHandler,
    comment,
    setComment,
  };
};

export default useSendComment;
