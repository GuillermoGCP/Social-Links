import PropTypes from "prop-types";
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useApiRequest from "../hooks/useApiRequest";
import { toast } from "react-toastify";
import { comment } from "postcss";
const tokenContext = React.createContext();

const TokenProvider = ({ children }) => {
  //Estado del token:
  const [tokenState, setTokenState] = useLocalStorage("tokenInLocalStorage");

  //Estado de la info del usuario logueado:
  const [profileInfo, setProfileInfo] = React.useState({});

  const editProfile = (newData) => {
    setProfileInfo({ ...profileInfo, ...newData });
  };

  const { fetchData, loading } = useApiRequest();

  const onSuccess = (data) => {
    toast.success(data.message);
    setProfileInfo(data.data);
  };

  const onError = (error) => {
    toast.error(error.message);
  };

  React.useEffect(() => {
    if (!tokenState) return;
    const url = import.meta.env.VITE_SERVER_URL + "/profile";
    const urlData = {
      headers: { authorization: `Bearer ${tokenState}` },
    };

    fetchData(url, urlData, onSuccess, onError);
  }, []);

  //Estado de los commentarios de los links:
  const [commentList, setCommentList] = React.useState("");
  const addComment = (newComment) => {
    setCommentList([...commentList, newComment]);
  };
  const addResponse = (comments) => {
    setCommentList(comments);
  };

  return (
    <tokenContext.Provider
      value={{
        tokenState,
        setTokenState,
        profileInfo,
        setProfileInfo,
        editProfile,
        loading,
        commentList,
        setCommentList,
        addComment,
        addResponse,
      }}
    >
      {children}
    </tokenContext.Provider>
  );
};

TokenProvider.propTypes = {
  children: PropTypes.node,
};
export { TokenProvider, tokenContext };
