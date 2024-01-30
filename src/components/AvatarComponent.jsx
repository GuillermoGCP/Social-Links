import PropTypes from "prop-types";
const AvatarComponent = ({ profileInfo }) => {
  const urlImage =
    import.meta.env.VITE_SERVER_URL + `/uploads/${profileInfo.profilePicture}`;
  return (
    <img
      className="min-w-40 h-40 rounded-full "
      src={urlImage}
      alt={profileInfo.user}
    />
  );
};
AvatarComponent.propTypes = {
  profileInfo: PropTypes.object,
};
export default AvatarComponent;
