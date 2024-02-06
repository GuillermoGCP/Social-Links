import React, { useContext } from "react";
import useLinksToday from "../hooks/useLinksToday";
import NoLinksToday from "./NoLinksToday";
import OneLink from "./OneLink";
import { tokenContext } from "../contexs/tokenContext";
import { useNavigate } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import Search from "./Search";
import Button from "./Button";
import { ClockLoader } from "react-spinners";
const LinksToday = () => {
  const [tokenState] = useContext(tokenContext);
  const navigate = useNavigate();
  const { today, changeRating2, loading } = useLinksToday();
  const {
    filteredLinks,
    searchHandler,
    setSearchParams,
    inputValue,
    setInputValue,
  } = useSearch(today);

  const goToLinkDetails = (id) => {
    navigate(`/${id}`, { state: { mainPageState: today } });
  };

  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);
  return (
    <main className="min-h-screen">
      <section>
        <div className="mt-6">
          <Search
            handler={searchHandler}
            inputValue={inputValue}
            placeholder="Buscador"
          />
        </div>
        {loading ? (
          <>
            <p className="text-2xl font-bold text-center text-gray-700 mb-4 mt-14">
              Cargando enlaces
            </p>
            <div className="flex justify-center items-center">
              <ClockLoader color="#4f46e5" size={50} />
            </div>
          </>
        ) : (
          <>
            <div className="p-5 max-w-44 mx-auto">
              <Button
                handler={() => {
                  setInputValue("");
                  setSearchParams({ q: "" });
                }}
              >
                Reiniciar búsqueda
              </Button>
            </div>
            <section className="flex justify-center">
              <ul className="w-5/6 flex flex-wrap justify-center items-start">
                {filteredLinks ? (
                  filteredLinks.map((link) => (
                    <li
                      key={link.id}
                      style={{ width: "370px" }}
                      className="p-4 hover:scale-95 transition-transform m-4 rounded-xl shadow-lg hover:shadow-2xl bg-slate-100/40"
                    >
                      <OneLink
                        key={link.id}
                        link={link}
                        changeRating2={changeRating2}
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
          </>
        )}
      </section>
    </main>
  );
};

export default LinksToday;
