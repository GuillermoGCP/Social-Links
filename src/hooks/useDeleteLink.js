import React from "react";
import { tokenContext } from "../contexs/tokenContext";
import { toast } from "react-toastify";
import useApiRequest from "./useApiRequest";

const useDeleteLink = (linkId) => {
  const url = import.meta.env.VITE_SERVER_URL + `links/${linkId}`;
  const [tokenState] = React.useContext(tokenContext);
  const { fetchData } = useApiRequest();

  const onSuccess = (data) => {
    toast.success(data.data.message);
  };

  const onError = (error) => {
    toast.error(error.error);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    const urlData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenState}`,
      },
    };
    fetchData(url, urlData, onSuccess, onError);
  };
  return { deleteHandler };
};
export default useDeleteLink;
