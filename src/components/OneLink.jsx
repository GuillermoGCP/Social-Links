import StarRating from "./StarRating";
import VoteBox from "./VoteBox";
import PropTypes from "prop-types";
import OwnRatingBox from "./OwnRatingBox";
const OneLink = ({ link, changeRating }) => {
  return (
    <article className="max-4/5 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-indigo-300 ">
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2">{link.title}</p>

        <p className="text-gray-700 text-base mt-2">
          <a
            className="text-indigo-600 underline"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.url}
          </a>
        </p>

        <p className="text-gray-700 text-base mt-2">{link.description}</p>
      </div>

      <div className="px-6 py-4">
        <p className="text-gray-700 text-base mt-2">
          Compartido por: {link.name}
        </p>
        <p className="px-6 py-4 flex">
          Puntuación media: {Math.round(link.rating)} <StarRating link={link} />
        </p>
        <VoteBox link={link} changeRating={changeRating}>
          Vota este Post
        </VoteBox>
        <OwnRatingBox link={link} />
      </div>
    </article>
  );
};
OneLink.propTypes = {
  link: PropTypes.object,
  changeRating: PropTypes.func,
};
export default OneLink;
