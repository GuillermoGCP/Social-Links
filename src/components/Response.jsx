import PropTypes from "prop-types";
import PostCounter from "./PostCounter";

const Response = ({ response }) => {
  const pic = `${import.meta.env.VITE_SERVER_URL}/uploads/${
    response.profilePicture
  }`;

  return (
    <article className="m-4 p-4 rounded-s-md shadow-lg  bg-indigo-300/40 w-80 flex items-center">
      <div className="flex flex-col items-start">
        <img
          src={pic}
          alt="Foto del usuario"
          className="rounded-full h-8 w-8 mb-2 border-slate-100/60  shadow-lg border-4 object-cover"
        />
        <p className="text-gray-700 ">{response.name}</p>
        <div className="text-xs text-slate-600">
          <PostCounter createdAt={response.createdAt} />
        </div>
      </div>

      <p className="text-xs text-left text-slate-600 font-bold p-4 mb-4">
        {response.comment}
      </p>
    </article>
  );
};
Response.propTypes = {
  response: PropTypes.object,
};
export default Response;
