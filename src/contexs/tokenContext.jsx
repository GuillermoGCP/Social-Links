import PropTypes from "prop-types";
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const tokenContext = React.createContext();

const TokenProvider = ({ children }) => {
  const [tokenState, setTokenState] = useLocalStorage("tokenInLocalStorage");
  return (
    <tokenContext.Provider value={[tokenState, setTokenState]}>
      {children}
    </tokenContext.Provider>
  );
};
TokenProvider.propTypes = {
  children: PropTypes.node,
};
export { TokenProvider, tokenContext };
