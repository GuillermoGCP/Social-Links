import { useState, useContext } from "react";
import useApiRequest from "./useApiRequest.js";
import { toast } from "react-toastify";
import { tokenContext } from "../contexs/tokenContext.jsx";

const useProfileEdit = () => {
  const { fetchData } = useApiRequest();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [biography, setBio] = useState("");
  const [tokenState] = useContext(tokenContext);

  const url = import.meta.env.VITE_SERVER_URL + `/profile`;

  const onSuccess = (data) => {
    toast.success(data.data.message);
    console.log(data);
  };

  const onError = (error) => {
    toast.error(error.error);
    console.log(error);
  };

  const formData = new FormData();
  name ? formData.append("name", name) : null;
  email ? formData.append("email", email) : null;
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
    profilePicture,
    setProfilePicture,
    biography,
    setBio,
    handleProfileEditSubmit,
  };
};

export default useProfileEdit;
