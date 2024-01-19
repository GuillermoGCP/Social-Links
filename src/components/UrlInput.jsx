import PropTypes from "prop-types";
const InputUrl = ({ urlState, setUrlState, children, placeholder }) => {
  return (
    <>
      <label
        className="block text-sm font-semibold text-gray-700"
        htmlFor="inputUrl"
      >
        {children}
      </label>
      <input
        required
        placeholder={placeholder}
        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
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
  placeholder: PropTypes.string,
};
export default InputUrl;
