import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProfileCard({ profileInfo }) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {profileInfo.user}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profileInfo.biography}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/dashboard/profileEdit">
          <Button size="small" color="primary">
            Editar mis datos
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
ProfileCard.propTypes = {
  profileInfo: PropTypes.object,
};
