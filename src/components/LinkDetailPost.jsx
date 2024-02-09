import PropTypes from "prop-types";
import ExpandButton from "./ExpandButton";
import useShortUrl from "../hooks/useShortUrl";
import PostCounter from "./PostCounter";

const LinkDetailPost = ({ link }) => {
  const { shortUrl } = useShortUrl(link.url);

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
        <>
          <div className="text-slate-400 text-right text-sm mr-2 mt-2">
            <PostCounter createdAt={link.createdAt} />
          </div>
        </>
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
