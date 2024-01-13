import PropTypes from "prop-types";
const NameForm = ({ name, setName }) => {
  return (
    <>
      <label className="border-red-600" htmlFor="name">
        Nombre
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
};
export default NameForm;
