import PropTypes from "prop-types";
const SelectInput = ({ children, value, onChange }) => {
  return (
    <>
      <label htmlFor="select">{children}</label>
      <select
        className="rounded-md mb-2 border-0 bg-transparent bg-none font-medium text-slate-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-2/3 mx-auto"
        id="ratingSelect"
        name="ratingSelect"
        value={value}
        onChange={onChange}
      >
        <option value="0">0 Estrella/s</option>
        <option value="1">1 Estrella/s</option>
        <option value="2">2 Estrella/s</option>
        <option value="3">3 Estrella/s</option>
        <option value="4">4 Estrella/s</option>
        <option value="5">5 Estrella/s</option>
        <option value="6">6 Estrella/s</option>
        <option value="7">7 Estrella/s</option>
        <option value="8">8 Estrella/s</option>
        <option value="9">9 Estrella/s</option>
        <option value="10">10 Estrella/s</option>
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
