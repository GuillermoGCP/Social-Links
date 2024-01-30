import { useState, useContext, useEffect } from "react";
import useApiRequest from "./useApiRequest.js";
import { toast } from "react-toastify";
import { tokenContext } from "../contexs/tokenContext.jsx";

const useProfileEdit = () => {
  const [tokenState, , profileInfo, , editProfile] = useContext(tokenContext);
  const { fetchData } = useApiRequest();
  const [name, setName] = useState(profileInfo.user || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [biography, setBio] = useState("");
  useEffect(() => {
    if (!profileInfo.id) {
      return;
    }
    setName(profileInfo.user);
    setEmail(profileInfo.email);
    setBio(profileInfo.biography || "");
  }, [profileInfo]);
  const url = import.meta.env.VITE_SERVER_URL + `/profile`;

  const onSuccess = (body) => {
    const {
      userId: id,
      name: user,
      biography,
      email,
      profilePicture,
    } = body.data;
    editProfile({ id, user, biography, email, profilePicture });
    toast.success(body.data.message);
    setName("");
    setEmail("");
    setPassword("");
    setProfilePicture(null);
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
