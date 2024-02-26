import PropTypes from "prop-types";
import PostCounter from "./PostCounter";
import Response from "./Response";
import ResponseBox from "./ResponseBox";

const Comment = ({ comment }) => {
  const pic = `${import.meta.env.VITE_SERVER_URL}/uploads/${
    comment.profilePicture
  }`;
  return (
    <article className="m-4 p-4 rounded-xl shadow-lg  bg-slate-100/40 w-96 flex flex-col items-center">
      <img
        src={pic}
        alt="Foto del usuario"
        className="rounded-full h-16 w-16 mb-2 border-slate-100/60  shadow-lg border-4 object-cover"
      />
      <p className="text-gray-700">{comment.name}</p>
      <div className="text-xs text-slate-600">
        <PostCounter createdAt={comment.createdAt} />
      </div>
      <p className="text-sm text-left text-slate-600 font-bold p-4 mb-4">
        {comment.comment}
      </p>
      <ResponseBox comment={comment} />
      {comment.parseResponses &&
        comment.parseResponses.map((response) => {
          return (
            <div key={response.id}>
              <Response response={response} />
            </div>
          );
        })}
    </article>
  );
};
Comment.propTypes = {
  comment: PropTypes.object,
};
export default Comment;
