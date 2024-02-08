import PropTypes from "prop-types";
import ExpandButton from "./ExpandButton";
import useShortUrl from "../hooks/useShortUrl";

const LinkDetailPost = ({ link }) => {
  const { shortUrl } = useShortUrl(link.url);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div
      style={{
        marginTop: "-35px",
        background: "linear-gradient(to bottom, #4F46E5, #4338CA, #3A2F9E)",
      }}
      className="rounded-xl overflow-hidden shadow-lg pt-4 pr-4 pl-4 text-center"
    >
      <h1 className="text-2xl font-bold mt-6 mb-3 text-slate-100">
        {link.title}
      </h1>
      <a
        href={link.url}
        className="text-slate-300 text-lg underline block hover:text-green-300"
      >
        {shortUrl}
      </a>
      <ExpandButton description={link.description} />

      {link.createdAt && (
        <p className="text-slate-400 text-right text-sm mr-2 mt-2">
          Creado {formatDate(link.createdAt)}
        </p>
      )}
    </div>
  );
};

LinkDetailPost.propTypes = {
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    createdAt: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string,
    ]),
    description: PropTypes.string.isRequired,
  }),
};

export default LinkDetailPost;
