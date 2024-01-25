import React from "react";
import { tokenContext } from "../contexs/tokenContext";
import { toast } from "react-toastify";
import useApiRequest from "../hooks/useApiRequest";
import PropTypes from "prop-types";

const DeleteButton = ({ linkId, updateState }) => {
  const url = import.meta.env.VITE_SERVER_URL + `/links/${linkId}`;
  const [tokenState] = React.useContext(tokenContext);
  const { fetchData } = useApiRequest();

  const onSuccess = (data) => {
    toast.success(data.message);
    // if (onDeleteSuccess) {
    //   onDeleteSuccess();
    // }
    updateState(data.link);
    console.log(data.link);
  };

  const onError = (error) => {
    toast.error(error.error);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    const confirmDelete = window.confirm(
      "Estás seguro de que quieres eliminar el link?"
    );
    if (confirmDelete) {
      const urlData = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenState}`,
        },
      };
      fetchData(url, urlData, onSuccess, onError);
    }
  };
  return (
    <>
      <button
        className="block w-1/3 mx-auto rounded-md bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-500 focus:ring-indigo-200 "
        onClick={deleteHandler}
      >
        Eliminar link
      </button>
    </>
  );
};
DeleteButton.propTypes = {
  linkId: PropTypes.node,
  onDeleteSuccess: PropTypes.func,
};
export default DeleteButton;
