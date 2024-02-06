import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function RecipeReviewCard({ link }) {
  const url =
    import.meta.env.VITE_SERVER_URL + `/uploads/${link.profilePicture}`;

  const date = new Date(link.createdAt);
  const formatedDateObject = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formatedDate = date.toLocaleString("es-ES", formatedDateObject);
  console.log(formatedDateObject);

  return (
    <div className="w-80 mr-5 bg-slate-100/60 rounded-xl p-4">
      <CardHeader
        avatar={
          <Avatar className="shadow-lg">
            <img src={url} alt="" />
          </Avatar>
        }
        title={link.name}
        subheader={formatedDate}
      />

      <h2 className="text-center">{link.title}</h2>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Descripción:
        </Typography>
        <div
          className="overflow-y-auto h-56 "
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          {link.description}
        </div>
      </CardContent>
    </div>
  );
}

RecipeReviewCard.propTypes = { link: PropTypes.object };
