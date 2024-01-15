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
  urlState: PropTypes.string,
  setUrlState: PropTypes.func,
  children: PropTypes.node,
};
export default InputUrl;
