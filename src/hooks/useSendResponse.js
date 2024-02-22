import React from "react";
import { toast } from "react-toastify";
import useApiRequest from "../hooks/useApiRequest";
import { tokenContext } from "../contexs/tokenContext";

const useSendResponse = (linkId, commentId) => {
  const url = import.meta.env.VITE_SERVER_URL + "/comments/response";
  const { tokenState, addResponse } = React.useContext(tokenContext);
  const [response, setResponse] = React.useState("");
  const { fetchData } = useApiRequest();

  const onSuccess = (body) => {
    toast.success(body.message);
    addResponse(body.comments);
    setResponse("");
  };

  const onError = (error) => {
    toast.error(error.error);
  };

  const responseHandler = (e) => {
    e.preventDefault();
    const urlData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenState}`,
      },
      body: JSON.stringify({
        linkId: linkId,
        comment: response,
        parent_comment_id: commentId,
      }),
    };

    response ? fetchData(url, urlData, onSuccess, onError) : null;
  };
  return {
    responseHandler,
    response,
    setResponse,
  };
};

export default useSendResponse;
