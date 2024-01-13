import PropTypes from "prop-types";
const EmailForm = ({ email, setEmail }) => {
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
EmailForm.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
};
export default EmailForm;
