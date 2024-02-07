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

  return (
    <>
      <div className="ml-20">
        {link.ownerId !== profileInfo.id ? (
          <p className="font-medium text-slate-600">{`${link.name}`}</p>
        ) : (
          <p className="text-transparent">Tu Link</p>
        )}
      </div>

      <div style={{ marginTop: "-30px" }}>
        <img
          className="w-16 h-16 rounded-full object-cover object-center border-4 border-indigo-500"
          src={urlImage}
          alt={link.name}
        />

        <LinkDetailPost link={link} />
      </div>

      <p className="text-center mt-4 mb-1 font-medium text-slate-600">
        Rating
        <StarRating link={link} />
      </p>

      {link.individualRatings ? (
        <p className="text-right mr-6 font-medium text-slate-600">{`${link.individualRatings?.length} voto/s`}</p>
      ) : (
        <p className="font-medium text-slate-600">0 votos </p>
      )}

      <div className="p-4 mt-8 flex items-center justify-around">
        <OwnRatingBox link={link} />

        {link.ownerId !== profileInfo.id && (
          <VoteBox
            link={link}
            changeRating={changeRating}
            changeRating2={changeRating2}
          />
        )}
      </div>
    </>
  );
};

OneLink.propTypes = {
  link: PropTypes.object,
  changeRating: PropTypes.func,
  changeRating2: PropTypes.func,
};

export default OneLink;

<div>
  <div>1</div>
  <p>2</p>
  <form>3</form>
</div>;
