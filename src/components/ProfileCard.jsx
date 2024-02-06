import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ClockLoader } from "react-spinners";

export default function ProfileCard({ profileInfo, loading, isSmallScreen }) {
  const url =
    import.meta.env.VITE_SERVER_URL + "/uploads/" + profileInfo.profilePicture;

  {
    return loading ? (
      <div className="flex justify-center items-center">
        <ClockLoader color="#ccc" size={50} />
      </div>
    ) : (
      <div className="max-w-96">
        {isSmallScreen && (
          <>
            <div className="flex justify-center">
              <img
                className="w-28 h-28 border-4  rounded-full object-cover object-center"
                src={url}
                alt={profileInfo.user}
              />
            </div>
            <div
              style={{ marginTop: "-60px" }}
              className="h-24 w-42 rounded-3xl bg-indigo-600"
            ></div>
          </>
        )}
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              className="text-slate-500"
            >
              {profileInfo.user}
            </Typography>
            <p className="font-medium text-slate-600">
              {profileInfo.biography}
            </p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/dashboard/profileEdit">

            <Button size="small" className=" hover:text-green-500">
              Editar mis datos
            </Button>
          </Link>
        </CardActions>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  profileInfo: PropTypes.object,
  loading: PropTypes.bool,
  isSmallScreen: PropTypes.bool,
};
