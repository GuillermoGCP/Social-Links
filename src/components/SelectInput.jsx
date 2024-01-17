import PropTypes from "prop-types";
const SelectInput = ({ children, value, onChange }) => {
  return (
    <>
      <label htmlFor="select">{children}</label>
      <select
        id="ratingSelect"
        name="ratingSelect"
        value={value}
        onChange={onChange}
      >
        <option value="1">1 Punto/s</option>
        <option value="2">2 Punto/s</option>
        <option value="3">3 Punto/s</option>
        <option value="4">4 Punto/s</option>
        <option value="5">5 Punto/s</option>
        <option value="6">6 Punto/s</option>
        <option value="7">7 Punto/s</option>
        <option value="8">8 Punto/s</option>
        <option value="9">9 Punto/s</option>
        <option value="10">10 Punto/s</option>
      </select>
    </>
  );
};
SelectInput.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default SelectInput;
