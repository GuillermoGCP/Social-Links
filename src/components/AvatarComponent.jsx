import PropTypes from "prop-types";
import { ClockLoader } from "react-spinners";
const AvatarComponent = ({ profileInfo, loading }) => {
  const urlImage =
    import.meta.env.VITE_SERVER_URL + `/uploads/${profileInfo.profilePicture}`;
  {
    return loading ? (
      <div className="flex justify-center items-center">
        <ClockLoader color="#ccc" size={50} />
      </div>
    ) : (
      <img
        className="min-w-40 h-40 rounded-full "
        src={urlImage}
        alt={profileInfo.user}
      />
    );
  }
};
AvatarComponent.propTypes = {
  profileInfo: PropTypes.object,
  loading: PropTypes.bool,
};
export default AvatarComponent;
