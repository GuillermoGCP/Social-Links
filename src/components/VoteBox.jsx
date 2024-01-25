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
    <>
      <form>
        <SelectInput value={voteState} onChange={onChange}>
          Tu calificación{" "}
        </SelectInput>
        <Button handler={voteHandler}>Vota</Button>
      </form>
    </>
  );
};
VoteBox.propTypes = {
  link: PropTypes.object,
  changeRating: PropTypes.func,
};
export default VoteBox;
