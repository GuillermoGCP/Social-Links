import PropTypes from "prop-types";
const NameForm = ({ name, setName, children }) => {
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
NameForm.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  children: PropTypes.node,
};
export default NameForm;
