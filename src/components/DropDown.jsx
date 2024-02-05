import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ link }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const url =
    import.meta.env.VITE_SERVER_URL + `/uploads/${link.profilePicture}`;

  return (
    <div className="w-80 m-10">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar>
              <img src={url} alt="" />
            </Avatar>
          }
          title={link.name}
          subheader={link.createdAt.toLocaleString()}
        />

        <h2 className="text-center">{link.title}</h2>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Descripción:
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body2" color="text.secondary">
              {link.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

RecipeReviewCard.propTypes = { link: PropTypes.object };
