import React from "react";
import OneLink from "../components/OneLink";
import { useNavigate } from "react-router-dom";
import PostLink from "../components/PostLink";
import useSearch from "../hooks/useSearch";
import Search from "../components/Search";
import Button from "../components/Button";

import useAllLinks from "../hooks/useAlllinks";
import NoLinksToday from "../components/NoLinksToday";

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
    <main
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: 'url("/clouds2.jpg")' }}
    >
      <section className="max-w-2xl mx-auto mt-8 p-4">
        <PostLink addNewLink={addNewLink} />
      </section>

      <section className="max-w-2xl mx-auto mt-8 p-4">
        <Search handler={searchHandler} placeholder="Buscador" />
        <div className="p-5 max-w-44 mx-auto">
          <Button
            handler={() => {
              setSearchParams({ q: "" });
            }}
          >
            Reiniciar búsqueda
          </Button>
        </div>
      </section>

      <section className="w-screen flex justify-center">
        <ul className="flex flex-wrap justify-center">
          {orderFilteredLinks ? (
            orderFilteredLinks.map((link) => (
              <li
                key={link.id}
                className="list-none w-96 m-4 p-4 rounded-xl shadow-lg hover:shadow-2xl border-gray-400 border-solid border hover:scale-95 transition-transform"
              >
                <OneLink
                  key={link.id}
                  link={link}
                  changeRating={changeRating}
                />
                <div className="mt-10">
                  <Button
                    handler={() => {
                      goToLinkDetails(link.id);
                    }}
                  >
                    Ve al Post
                  </Button>
                </div>
              </li>
            ))
          ) : (
            <NoLinksToday />
          )}
        </ul>
      </section>
    </main>
  );
};

export default MainPage;
