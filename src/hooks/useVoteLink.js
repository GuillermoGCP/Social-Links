import useApiRequest from "../hooks/useApiRequest";
import React from "react";
import { toast } from "react-toastify";
import { tokenContext } from "../contexs/tokenContext";

const useVoteLink = ({ link, changeRating2, changeRating = () => {} }) => {
  const [voteState, setVoteState] = React.useState();
  const { fetchData } = useApiRequest();
  const url = import.meta.env.VITE_SERVER_URL + `/links/${link.id}`;
  const { tokenState } = React.useContext(tokenContext);

  const onSuccess = (data) => {
    toast.success(data.message);
    changeRating && changeRating(link.id, data.data.rating, data.rating);
    changeRating2 && changeRating2(link.id, data.data.rating, data.rating);
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
