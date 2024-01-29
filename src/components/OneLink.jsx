import StarRating from "./StarRating";
import VoteBox from "./VoteBox";
import OwnRatingBox from "./OwnRatingBox";
import PropTypes from "prop-types";
import { useContext } from "react";
import { tokenContext } from "../contexs/tokenContext";
import LinkDetailPost from "./LinkDetailPost";

const OneLink = ({ link, changeRating, changeRating2 }) => {
  const [, , profileInfo] = useContext(tokenContext);
  const urlImage =
    import.meta.env.VITE_SERVER_URL + `/uploads/${link.profilePicture}`;
  console.log(link);
  return (
    <article className="max-w-4/5 mx-auto rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-indigo-300 p-4">
      <LinkDetailPost link={link} />

      <div className="mt-4 flex items-center">
        {link.ownerId !== profileInfo.id && (
          <p className="text-gray-700 text-base mr-4">{link.name}</p>
        )}

        <img
          className="w-16 h-16 rounded-full"
          src={urlImage}
          alt={link.name}
        />

        {link.ownerId !== profileInfo.id && (
          <div className="ml-auto">
            <VoteBox
              link={link}
              changeRating={changeRating}
              changeRating2={changeRating2}
            >
              Vota este Post
            </VoteBox>
          </div>
        )}
      </div>
      <div className="flex mt-4 justify-between">
        <p className="flex items-center text-gray-700 text-base mr-4 ">
          Puntuación media: <StarRating link={link} />
        </p>
        <p>{`${link.individualRatings.length} Votos`}</p>

        <OwnRatingBox link={link} />
      </div>
    </article>
  );
};

OneLink.propTypes = {
  link: PropTypes.object,
  changeRating: PropTypes.func,
  changeRating2: PropTypes.func,
};

export default OneLink;
