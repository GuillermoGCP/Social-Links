import React from "react";
import OneLink from "../components/OneLink";
import { useNavigate } from "react-router-dom";
import PostLink from "../components/PostLink";
import useSearch from "../hooks/useSearch";
import Search from "../components/Search";
import Button from "../components/Button";
import useAllLinks from "../hooks/useAlllinks";

const MainPage = () => {
  const { state, tokenState } = useAllLinks();
  const { filteredState, searchHandler } = useSearch(state);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);

  const goToLinkDetails = (id) => {
    navigate(`/${id}`, { state: { mainPageState: state } });
  };

  return (
    <section className="max-w-2xl mx-auto mt-8 p-4">
      <PostLink />
      <Search handler={searchHandler} placeholder="Buscador" />

      <ul>
        {filteredState.map((link) => (
          <div key={link.id} className="p-4 border-2 border-x-slate-200">
            <OneLink key={link.id} link={link} />
            <div className="p-5 max-w-xs mx-auto">
              <Button
                handler={() => {
                  goToLinkDetails(link.id);
                }}
              >
                Ve al post
              </Button>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default MainPage;
