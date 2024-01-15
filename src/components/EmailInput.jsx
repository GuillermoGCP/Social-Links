import PropTypes from "prop-types";
const EmailInput = ({ email, setEmail }) => {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input
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
