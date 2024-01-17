import PropTypes from "prop-types";
const EmailInput = ({ email, setEmail }) => {
  return (
    <>
      <label
        className="block text-sm font-semibold leading-6 text-gray-900"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </>
  );
};
EmailInput.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
};
export default EmailInput;
