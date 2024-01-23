import useVoteLink from "../hooks/useVoteLink";
import Button from "./Button";
import SelectInput from "./SelectInput";

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
export default VoteBox;
