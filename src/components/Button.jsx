import PropTypes from "prop-types";

const Button = ({ handler, children }) => {
  return (
    <button
      className="block w-2/3 mx-auto rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-500 focus:ring-indigo-200"
      onClick={handler}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  handler: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
