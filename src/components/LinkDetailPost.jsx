import PropTypes from "prop-types";

import ExpandButton from "./ExpandButton";

const LinkDetailPost = ({ link }) => {
  return (
    <div
      style={{ marginTop: "-35px" }}
      className="rounded-xl overflow-hidden shadow-lg bg-indigo-600 pt-4 pr-4 pl-4 text-center "
    >
      <h1 className="text-2xl font-bold mt-6 mb-3 text-slate-100">
        {link.title}
      </h1>
      <a
        href={link.url}
        className="text-slate-100 text-lg underline block hover:text-green-300"
      >
        {link.url}
      </a>

      <ExpandButton description={link.description} />
    </div>
  );
};

LinkDetailPost.propTypes = {
  link: PropTypes.object,
};

export default LinkDetailPost;
