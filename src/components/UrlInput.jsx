import PropTypes from "prop-types";
const InputUrl = ({ urlState, setUrlState, children }) => {
  return (
    <>
      <label
        className="block text-sm font-semibold leading-6 text-gray-900"
        htmlFor="inputUrl"
      >
        {children}
      </label>
      <input
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
