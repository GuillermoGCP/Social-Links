import PropTypes from "prop-types";
const SelectInput = ({ children, value, onChange }) => {
  return (
    <>
      <label htmlFor="select">{children}</label>
      <select
        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
