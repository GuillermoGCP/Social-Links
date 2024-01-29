import useApiRequest from "./useApiRequest";
import { tokenContext } from "../contexs/tokenContext";
import React from "react";
import { useNavigate } from "react-router";

const useLinksToday = () => {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_SERVER_URL + "/links?today=true";
  const [today, setToday] = React.useState([]);
  const [tokenState, , profileInfo] = React.useContext(tokenContext);

  console.log(today);

  const changeRating2 = (id, rating, userVote) => {
    setToday((prevState) => {
      return prevState.map((link) => {
        if (link.id === id) {
          if (!link.voterUserIds.includes(profileInfo.id)) {
            return {
              ...link,
              voterUserIds: [...link.voterUserIds, profileInfo.id],
              individualRatings: [...link.individualRatings, userVote],
              rating: rating,
              votedByLoggedUser: 1,
            };
          } else {
            const index = link.voterUserIds.findIndex(
              (linkId) => linkId === profileInfo.id
            );
            const updatedIndividualRatings = [...link.individualRatings];
            updatedIndividualRatings[index] = userVote;

            return {
              ...link,
              individualRatings: updatedIndividualRatings,
              rating: rating,
              votedByLoggedUser: 1,
            };
          }
        }
        return link;
      });
    });
  };

  const onSuccess = (data) => {
    const modifiedData = data.data.links?.map((link) => {
      const modifiedLink = { ...link };

      if (
        modifiedLink.individualRatings !== null &&
        typeof modifiedLink.individualRatings === "string"
      ) {
        modifiedLink.individualRatings = modifiedLink.individualRatings
          .split(",")
          .map(Number);
      } else {
        modifiedLink.individualRatings = [];
      }

      if (
        modifiedLink.voterUserIds !== null &&
        typeof modifiedLink.voterUserIds === "string"
      ) {
        modifiedLink.voterUserIds = modifiedLink.voterUserIds
          .split(",")
          .map(Number);
      } else {
        modifiedLink.voterUserIds = [];
      }

      return modifiedLink;
    });

    setToday(modifiedData);
    console.log(data);
  };

  const onError = (error) => {
    console.error(error.error);
  };
  const { fetchData } = useApiRequest();
  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
      return;
    }
    const urlData = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenState}`,
      },
    };
    fetchData(url, urlData, onSuccess, onError);
  }, []);

  return {
    today,
    tokenState,
    setToday,
    changeRating2,
  };
};
export default useLinksToday;
