import { useState, useContext } from "react";
import useApiRequest from "./useApiRequest.js";
import { toast } from "react-toastify";
import { tokenContext } from "../contexs/tokenContext.jsx";

const useProfileEdit = () => {
  const { fetchData } = useApiRequest();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [biography, setBio] = useState("");
  const [tokenState, , profileInfo, , editProfile] = useContext(tokenContext);

  const url = import.meta.env.VITE_SERVER_URL + `/profile`;

  const onSuccess = (data) => {
    editProfile(
      data.data.userId,
      data.data.name,
      data.data.email,
      data.data.biography,
      data.data.profilePicture
    );
    toast.success(data.data.message);

    // console.log("Desde use", profileInfo);
  };

  const onError = (error) => {
    toast.error(error.error);
    console.log(error);
  };

  const formData = new FormData();
  name ? formData.append("name", name) : null;
  email ? formData.append("email", email) : null;
  password ? formData.append("password", password) : null;
  profilePicture ? formData.append("profilePicture", profilePicture) : null;
  biography ? formData.append("biography", biography) : null;

  const handleProfileEditSubmit = async (e) => {
    e.preventDefault();
    const urlData = {
      method: "PATCH",
      headers: { Authorization: `Bearer ${tokenState}` },
      body: formData,
    };
    fetchData(url, urlData, onSuccess, onError);
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    profilePicture,
    setProfilePicture,
    biography,
    setBio,
    handleProfileEditSubmit,
    tokenState,
  };
};

export default useProfileEdit;
