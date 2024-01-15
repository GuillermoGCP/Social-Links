import PropTypes from "prop-types";
const ButtonForm = ({ handler, children }) => {
  return <button onClick={handler}>{children}</button>;
};
ButtonForm.propTypes = {
  handler: PropTypes.func,
  children: PropTypes.node,
};
export default ButtonForm;
