import React, { useEffect } from "react";
import { toast } from "react-toastify";
import useApiRequest from "../hooks/useApiRequest";
import { tokenContext } from "../contexs/tokenContext";

const useGetComments = (linkId) => {
  const url = import.meta.env.VITE_SERVER_URL + `/comments/${linkId}`;
  const { tokenState } = React.useContext(tokenContext);
  const { commentList, setCommentList } = React.useContext(tokenContext);
  const { fetchData, loading } = useApiRequest();

  const onSuccess = (data) => {
    setCommentList(data.comments);
  };

  const onError = (error) => {
    toast.error(error.error);
  };

  useEffect(() => {
    const urlData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenState}`,
      },
    };
    fetchData(url, urlData, onSuccess, onError);
  }, []);

  return {
    commentList,
    loading,
  };
};

export default useGetComments;
