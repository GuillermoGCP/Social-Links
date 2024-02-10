import useSendComment from "../hooks/useSendComment";
import PropTypes from "prop-types";
import Button from "../components/Button";

const CommentBox = ({ link }) => {
  const { commentHandler, comment, setComment } = useSendComment(link);
  return (
    <article className="flex flex-col items-center mb-20">
      <h2 className="text-2xl text-center text-slate-600 font-bold p-4 mb-4">
        Deja un comentario
      </h2>
      <form onSubmit={commentHandler}>
        <textarea
          className="border rounded-2xl p-2 w-3x1 mb-4 w-96"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          placeholder="Escribe tu comentario aquí..."
          rows={4}
          cols={50}
        />
        <div className="max-w-72 mx-auto ">
          <Button>Comentar</Button>
        </div>
      </form>
    </article>
  );
};

CommentBox.propTypes = {
  link: PropTypes.object,
};

export default CommentBox;
