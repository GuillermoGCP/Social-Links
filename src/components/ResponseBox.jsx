import useSendResponse from "../hooks/useSendResponse";
import PropTypes from "prop-types";

const ResponseBox = ({ comment }) => {
  const { responseHandler, response, setResponse } = useSendResponse(
    comment.linkId,
    comment.id,
    comment
  );

  return (
    <article className="flex flex-col items-center">
      <form onSubmit={responseHandler}>
        <textarea
          className="border rounded-2xl p-2 w-80 h-8 mb-4 leading-3 text-xs"
          value={response}
          onChange={(e) => {
            setResponse(e.target.value);
          }}
          placeholder="Escribe tu respuesta"
          rows={4}
          cols={50}
        />
        <div className="max-w-48 mx-auto h-12">
          <button className="flex w-2/3 items-center justify-center h-6 mx-auto rounded-md bg-indigo-600 px-4 py-3 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-500 focus:ring-indigo-200">
            Responder
          </button>
        </div>
      </form>
    </article>
  );
};

ResponseBox.propTypes = {
  comment: PropTypes.object,
};

export default ResponseBox;
