import React from "react";
import { toast } from "react-toastify";
import useApiRequest from "../hooks/useApiRequest";
import { tokenContext } from "../contexs/tokenContext";
import useCloseSesion from "./useCloseSesion";

const useDeleteAccount = () => {
  const url = import.meta.env.VITE_SERVER_URL + "/profile";
  const { tokenState } = React.useContext(tokenContext);

  const { fetchData } = useApiRequest();
  const { closeSesionHandler } = useCloseSesion();

  const onSuccess = (data) => {
    closeSesionHandler();
    toast.success(data.message);
  };

  const onError = (error) => {
    toast.error(error.error);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const confirmDelete = window.confirm(
      "Esta acción es irreversible, estás seguro de que quieres eliminar tu cuenta?"
    );
    if (confirmDelete) {
      const urlData = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenState}`,
        },
      };
      fetchData(url, urlData, onSuccess, onError);
    }
  };
  return {
    deleteHandler,
  };
};

export default useDeleteAccount;
