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

  return (
    <div className="w-80 bg-slate-100/30 rounded-lg p-4 border-solid border border-slate-300 ">
      <div className="flex items-center w-72  mt-4 mb-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl">
        <img
          src={url}
          alt=""
          style={{ marginTop: "-10px", marginBottom: "-10px" }}
          className="h-16 w-16 ml-4 border-4 object-cover rounded-full"
        />
        <p className="ml-10 font-medium text-slate-100">{link.name}</p>
      </div>

      <p className="font-medium text-slate-600 text-xs">{formatedDate}</p>

      <div className="w-72  mt-6 font-medium text-slate-600">
        <h2 className=" text-center mb-4">{link.title}</h2>
        <p className="mb-2 text-sm">Descripción:</p>
        <div
          className="overflow-y-auto h-56 "
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          {link.description}
        </div>
      </div>
    </div>
  );
}

RecipeReviewCard.propTypes = { link: PropTypes.object };
