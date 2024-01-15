import PropTypes from "prop-types";
const TextInput = ({ name, setName, children }) => {
  return (
    <>
      <label className="border-red-600" htmlFor="name">
        {children}
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
};
TextInput.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  children: PropTypes.node,
};
export default TextInput;
