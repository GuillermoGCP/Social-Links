import useApiRequest from "./useApiRequest";
import { tokenContext } from "../contexs/tokenContext";
import React from "react";
import { useNavigate } from "react-router";

const useAllLinks = () => {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_SERVER_URL + "/links";
  const [state, setState] = React.useState([]);
  const [tokenState, , profileInfo] = React.useContext(tokenContext);
  const addNewLink = (newLink) => {
    setState([...state, newLink]);
  };

  const deleteLink = (link) => {
    let newArray = state.filter((newLink) => {
      return newLink.id !== link.id;
    });
    setState(newArray);
  };

  const changeRating = (id, rating, userVote) => {
    //Lógica para que se repinten las votaciones y el icono con la puntuación individual de cada votante:
    setState((prevState) => {
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
    //Lógica para convertir a arrays las propiedades de los objetos de los ratings individuales y los id de los votantes:
    const modifiedData = data.data.links.map((link) => {
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

    setState(modifiedData);
  };

  const onError = (error) => {
    console.error(error.error);
  };
  const { fetchData, loading } = useApiRequest();
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
    state,
    tokenState,
    setState,
    addNewLink,
    changeRating,
    deleteLink,
    loading,
  };
};
export default useAllLinks;
