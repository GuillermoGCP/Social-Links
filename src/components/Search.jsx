import PropTypes from "prop-types";

const Search = ({ handler, children, placeholder, inputValue }) => {
  return (
    <form className="mb-4 max-w-xl mx-auto">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="search"
      >
        {children}
      </label>
      <input
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="search"
        type="text"
        onChange={handler}
        value={inputValue}
      />
    </form>
  );
};

Search.propTypes = {
  handler: PropTypes.func,
  children: PropTypes.node,
  placeholder: PropTypes.string,
  inputValue: PropTypes.string,
};

export default Search;
