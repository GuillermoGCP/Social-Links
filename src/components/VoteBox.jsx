import useVoteLink from "../hooks/useVoteLink";
import Button from "./Button";
import SelectInput from "./SelectInput";
import PropTypes from "prop-types";

const VoteBox = ({ link, changeRating }) => {
  const { voteState, onChange, voteHandler } = useVoteLink({
    link,
    changeRating,
  });

  return (
    <form className="text-center m-4">
      <SelectInput value={voteState} onChange={onChange} />
      <div className="p-4">
        {" "}
        <Button handler={voteHandler} size="small" className="mt-2">
          Vota
        </Button>
      </div>
    </form>
  );
};

VoteBox.propTypes = {
  link: PropTypes.object,
  changeRating: PropTypes.func,
};

export default VoteBox;
