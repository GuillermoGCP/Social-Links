import useVoteLink from "../hooks/useVoteLink";
import Button from "./Button";
import SelectInput from "./SelectInput";
import PropTypes from "prop-types";

const VoteBox = ({ link, changeRating, changeRating2 }) => {
  const { voteState, onChange, voteHandler } = useVoteLink({
    link,
    changeRating,
    changeRating2,
  });

  return (
    <form className=" text center">
      <SelectInput value={voteState} onChange={onChange} />

      <Button style={{ with: "40px" }} handler={voteHandler}>
        Vota
      </Button>
    </form>
  );
};

VoteBox.propTypes = {
  link: PropTypes.object,
  changeRating: PropTypes.func,
  changeRating2: PropTypes.func,
};

export default VoteBox;
