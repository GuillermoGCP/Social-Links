import PropTypes from "prop-types";
const ButtonForm = ({ handler }) => {
  return <button onClick={handler}>Enviar</button>;
};
ButtonForm.propTypes = {
  handler: PropTypes.func,
};
export default ButtonForm;
