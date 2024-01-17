import PropTypes from "prop-types";

const EmailInput = ({ email, setEmail, placeholder, children }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-sm font-semibold text-gray-700"
        htmlFor="email"
      >
        {children}
      </label>
      <input
        placeholder={placeholder}
        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        type="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </div>
  );
};

EmailInput.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
  placeholder: PropTypes.string,
  children: PropTypes.node,
};

export default EmailInput;
