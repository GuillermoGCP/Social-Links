import PropTypes from "prop-types";

import ExpandButton from "./ExpandButton";

const LinkDetailPost = ({ link }) => {
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
