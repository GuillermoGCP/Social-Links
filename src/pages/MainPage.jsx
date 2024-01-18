import React from "react";
import useMainPage from "../hooks/useMainPage";
import OneLink from "../components/OneLink";
import { useNavigate } from "react-router-dom";
import PostLink from "../components/PostLink";

const MainPage = () => {
  const { state, tokenState } = useMainPage();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);

  return (
    <article className="max-w-2xl mx-auto mt-8 p-4">
      <PostLink />

      <h2 className="text-2xl font-bold mt-8 mb-4">Links Publicados</h2>

      <ul>
        {state.map((link) => (
          <OneLink key={link.id} link={link} />
        ))}
      </ul>
    </article>
  );
};

export default MainPage;
