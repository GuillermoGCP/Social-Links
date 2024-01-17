import PropTypes from "prop-types";

const TextInput = ({ name, setName, children }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-sm font-semibold text-gray-700"
        htmlFor="name"
      >
        {children}
      </label>
      <input
        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  children: PropTypes.node,
};

export default TextInput;
