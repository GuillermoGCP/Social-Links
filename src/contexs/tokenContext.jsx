import PropTypes from "prop-types";
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useApiRequest from "../hooks/useApiRequest";
import { toast } from "react-toastify";
const tokenContext = React.createContext();

const TokenProvider = ({ children }) => {
  const [tokenState, setTokenState] = useLocalStorage("tokenInLocalStorage");

  const [profileInfo, setProfileInfo] = React.useState({});
  // console.log("desde tokenState", profileInfo);
  const editProfile = (id, user, email, biography, profilePicture) => {
    if (profileInfo.id === id) {
      (profileInfo.id = id),
        (profileInfo.user = user),
        (profileInfo.email = email),
        (profileInfo.biography = biography),
        (profileInfo.profilePicture = profilePicture);
    }

    setProfileInfo(profileInfo);
  };
  const { fetchData } = useApiRequest();

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
  }, [tokenState]);

  return (
    <tokenContext.Provider
      value={[
        tokenState,
        setTokenState,
        profileInfo,
        setProfileInfo,
        editProfile,
      ]}
    >
      {children}
    </tokenContext.Provider>
  );
};

TokenProvider.propTypes = {
  children: PropTypes.node,
};
export { TokenProvider, tokenContext };
