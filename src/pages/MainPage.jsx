import React from "react";
import useMainPage from "../hooks/useMainPage";
import OneLink from "../components/OneLink";
import { useNavigate } from "react-router-dom";
import PostLink from "../components/PostLink";
import useSearch from "../hooks/useSearch";
import Search from "../components/Search";

const MainPage = () => {
  const { state, tokenState } = useMainPage();
  const { filteredState, searchHandler } = useSearch(state);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);

  return (
    <section className="max-w-2xl mx-auto mt-8 p-4">
      <PostLink />
      <Search handler={searchHandler} placeholder="Buscador" />

      <ul>
        {filteredState.map((link) => (
          <OneLink key={link.id} link={link} />
        ))}
      </ul>
    </section>
  );
};

export default MainPage;
