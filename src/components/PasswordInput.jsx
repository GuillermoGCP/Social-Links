import PropTypes from "prop-types";

const PasswordForm = ({ password, setPassword, placeholder, children }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-sm font-semibold text-gray-700"
        htmlFor="password"
      >
        {children}
      </label>
      <input
        placeholder={placeholder}
        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    </div>
  );
};

PasswordForm.propTypes = {
  password: PropTypes.string,
  setPassword: PropTypes.func,
  placeholder: PropTypes.string,
  children: PropTypes.node,
};

export default PasswordForm;
