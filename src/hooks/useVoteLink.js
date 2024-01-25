import useApiRequest from "../hooks/useApiRequest";
import React from "react";
import { toast } from "react-toastify";
import { tokenContext } from "../contexs/tokenContext";

const useVoteLink = ({ link, changeRating }) => {
  const [voteState, setVoteState] = React.useState("0");
  const { fetchData } = useApiRequest();
  const url = import.meta.env.VITE_SERVER_URL + `/links/${link.id}`;
  const [tokenState] = React.useContext(tokenContext);

  const onSuccess = (data) => {
    toast.success(data.message);
    changeRating(link.id, data.data.rating);
  };

  const onError = (error) => {
    toast.error(error.error);
  };

  const voteHandler = (e) => {
    e.preventDefault();
    const urlData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenState}`,
      },
      body: JSON.stringify({ rating: voteState }),
    };

    fetchData(url, urlData, onSuccess, onError);
  };
  const onChange = (e) => {
    setVoteState(e.target.value);
  };
  return { voteState, onChange, voteHandler };
};
export default useVoteLink;
