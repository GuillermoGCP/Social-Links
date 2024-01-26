import PropTypes from "prop-types";

const LinkDetailPost = ({ link }) => {
  return (
    <article className="max-w-4/5 mx-auto rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-indigo-300 p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">{`Título: ${link.title}`}</h1>
      <a href={link.url} className="text-indigo-600 underline block mb-2">
        <h2 className="text-lg">{`URL: ${link.url}`}</h2>
      </a>
      <p className="text-gray-700">{`Descripción: ${link.description}`}</p>
    </article>
  );
};

LinkDetailPost.propTypes = {
  link: PropTypes.object,
};

export default LinkDetailPost;
