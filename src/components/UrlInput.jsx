import PropTypes from "prop-types";
const InputUrl = ({ urlState, setUrlState, children }) => {
  return (
    <>
      <label htmlFor="inputUrl">{children}</label>
      <input
        type="url"
        id="inputUrl"
        value={urlState}
        onChange={(e) => {
          setUrlState(e.target.value);
        }}
      />
    </>
  );
};
InputUrl.propTypes = {
  urlState: PropTypes.string.isRequired,
  setUrlState: PropTypes.func.isRequired,
  children: PropTypes.string,
};
export default InputUrl;
