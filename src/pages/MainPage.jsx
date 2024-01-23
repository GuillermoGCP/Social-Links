import React from "react";
import useMainPage from "../hooks/useMainPage";
import OneLink from "../components/OneLink";
import { useNavigate } from "react-router-dom";
import PostLink from "../components/PostLink";
import useSearch from "../hooks/useSearch";
import Search from "../components/Search";
import Button from "../components/Button";

const MainPage = () => {
  //Fetch para traer los links:
  const { state, tokenState, addNewLink } = useMainPage();
  //Se los paso al search y me los devuelve filtrados:
  const { filteredLinks, searchHandler } = useSearch(state);

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
  console.log(orderFilteredLinks);
  return (
    <section className="max-w-2xl mx-auto mt-8 p-4">
      <PostLink addNewLink={addNewLink} />
      <Search handler={searchHandler} placeholder="Buscador" />

      <ul>
        {orderFilteredLinks.map((link) => (
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
