import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ClockLoader } from "react-spinners";

export default function ProfileCard({ profileInfo, loading }) {
  {
    return loading ? (
      <div className="flex justify-center items-center">
        <ClockLoader color="#ccc" size={50} />
      </div>
    ) : (
      <Card
        sx={{ maxWidth: 400 }}
        className="bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-500"
      >
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              className="text-white"
              style={{ textShadow: "0.5px 0.5px 0.5px rgba(0,0,0,0.4)" }}
            >
              {profileInfo.user}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profileInfo.biography}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/dashboard/profileEdit">
            <Button
              size="small"
              className="text-indigo-800 hover:text-indigo-100"
              style={{
                textShadow: "0.5px 0.5px 0.5px rgba(0,0,0,0.4)",
              }}
            >
              Editar mis datos
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

ProfileCard.propTypes = {
  profileInfo: PropTypes.object,
  loading: PropTypes.bool,
};
