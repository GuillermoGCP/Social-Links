import { useContext } from "react";
import { tokenContext } from "../contexs/tokenContext";

const ProfileBox = () => {
  const [, , profileInfo] = useContext(tokenContext);
  console.log(profileInfo);
  return (
    <header>
      {Object.values(profileInfo).length > 0 && (
        <>
          <img src={profileInfo.profilePicture} alt={profileInfo.user} />
          <p>{profileInfo.user}</p>
        </>
      )}
    </header>
  );
};

export default ProfileBox;
