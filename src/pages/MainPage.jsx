import React from "react";
import OneLink from "../components/OneLink";
import { useNavigate } from "react-router-dom";
import PostLink from "../components/PostLink";
import useSearch from "../hooks/useSearch";
import Search from "../components/Search";
import Button from "../components/Button";

import useAllLinks from "../hooks/useAlllinks";

const MainPage = () => {
  const { state, tokenState, addNewLink, changeRating } = useAllLinks();
  const { filteredLinks, searchHandler, setSearchParams } = useSearch(state);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);

  const goToLinkDetails = (id) => {
    navigate(`/${id}`, { state: { mainPageState: state } });
  };

  //Ordeno los id de mayor a menor para que aparezpan arriba los últimos creados
  const orderFilteredLinks = filteredLinks.sort((a, b) => {
    return b.id - a.id;
  });

  return (
    <section className="max-w-2xl mx-auto mt-8 p-4">
      <PostLink addNewLink={addNewLink} />
      <Search handler={searchHandler} placeholder="Buscador" />
      <Button
        handler={() => {
          setSearchParams({ q: "" });
        }}
      >
        Reset
      </Button>

      <ul>
        {orderFilteredLinks.map((link) => (
          <div key={link.id} className="p-4 border-2 border-x-slate-200">
            <OneLink key={link.id} link={link} changeRating={changeRating} />
            <div className="p-5 max-w-xs mx-auto">
              <Button
                handler={() => {
                  goToLinkDetails(link.id);
                }}
              >
                Ve al Post
              </Button>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default MainPage;
