import React from "react";
import { toast } from "react-toastify";
import useApiRequest from "../hooks/useApiRequest";
import { tokenContext } from "../contexs/tokenContext";

const useSendComment = (link) => {
  const url = import.meta.env.VITE_SERVER_URL + "/comments";
  const { tokenState, addComment } = React.useContext(tokenContext);
  const [comment, setComment] = React.useState("");
  const { fetchData } = useApiRequest();

  const onSuccess = (body) => {
    toast.success(body.message);
    addComment(body.data);
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

    comment ? fetchData(url, urlData, onSuccess, onError) : null;
  };
  return {
    commentHandler,
    comment,
    setComment,
  };
};

export default useSendComment;
