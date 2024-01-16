import useVoteLink from "../hooks/useVoteLink";
import Button from "./Button";
import SelectInput from "./SelectInput";

const VoteBox = () => {
  const { voteState, onChange, voteHandler } = useVoteLink(4);

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
