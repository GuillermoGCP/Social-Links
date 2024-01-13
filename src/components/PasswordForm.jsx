import PropTypes from "prop-types";
const PasswordForm = ({ password, setPassword }) => {
  return (
    <>
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    </>
  );
};
PasswordForm.propTypes = {
  password: PropTypes.string,
  setPassword: PropTypes.func,
};
export default PasswordForm;
