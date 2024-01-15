import PropTypes from "prop-types";
const Button = ({ handler, children }) => {
  return <button onClick={handler}>{children}</button>;
};
Button.propTypes = {
  handler: PropTypes.func,
  children: PropTypes.node,
};
export default Button;
