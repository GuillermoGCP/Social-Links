import React from "react";
import useMainPage from "../hooks/useMainPage";
import OneLink from "../components/OneLink";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const { state, tokenState } = useMainPage();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);

  {
    return (
      <>
        <div>Links Publicados</div>
        <div>
          <ul>
            {state.map((link) => {
              return <OneLink key={link.id} link={link} />;
            })}
          </ul>
        </div>
      </>
    );
  }
};

export default MainPage;
