import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import PropTypes from "prop-types";

export default function ProfileCard({ profileInfo }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            {profileInfo.user}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profileInfo.biography}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Editar mis datos
        </Button>
      </CardActions>
    </Card>
  );
}
ProfileCard.propTypes = {
  profileInfo: PropTypes.object,
};
