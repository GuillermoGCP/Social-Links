import React from "react";
import { tokenContext } from "../contexs/tokenContext";
import { useNavigate } from "react-router-dom";
import useAllLinks from "../hooks/useAlllinks";
import DeleteButton from "../components/DeleteButton";
import ProfileCard from "../components/ProfileCard";
import AvatarComponent from "../components/AvatarComponent";
import Search from "../components/Search";
import useSearch from "../hooks/useSearch";
import LinkDetailPost from "../components/LinkDetailPost";
import NoLinksToday from "../components/NoLinksToday";
import Button from "../components/Button";
import { ClockLoader } from "react-spinners";
import { useMediaQuery } from "@mui/material";

const Dashboard = () => {
  const [tokenState, , profileInfo] = React.useContext(tokenContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);
  const { state, deleteLink, loading } = useAllLinks();
  const {
    filteredLinks,
    searchHandler,
    inputValue,
    setInputValue,
    setSearchParams,
  } = useSearch(state);
  const orderFilteredLinks = filteredLinks.sort((a, b) => {
    return b.id - a.id;
  });
  const newOwnLinks = orderFilteredLinks.filter(
    (id) => id.ownerId === profileInfo.id
  );
  const isSmallScreen = useMediaQuery("(max-width: 740px)");

  return (
    <main className="min-h-screen">
      <article className="max-w-3xl mx-auto my-8 p-6 shadow-md rounded-3xl flex space-between items-center justify-around gap-5 bg-slate-100/40">
        {!isSmallScreen && (
          <>
            <div className="h-80 w-64 rounded-3xl bg-indigo-600"></div>
            <div style={{ marginLeft: "-100px" }}>
              <AvatarComponent profileInfo={profileInfo} loading={loading} />
            </div>
          </>
        )}
        <ProfileCard
          profileInfo={profileInfo}
          loading={loading}
          isSmallScreen={isSmallScreen}
        />
      </article>

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
        <article>
          <Search
            handler={searchHandler}
            inputValue={inputValue}
            placeholder="Buscador"
          />
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
        </article>
      )}

      {newOwnLinks.length !== 0 ? (
        <section>
          <h2 className="text-2xl text-center text-slate-600 font-bold p-4 mb-4">
            Links que has compartido
          </h2>
          <ul className="max-w-xl mx-auto ">
            {newOwnLinks.map((link) => (
              <li
                key={link.id}
                className="list-none m-4 p-4 rounded-xl shadow-lg hover:shadow-2xl  bg-slate-100/40 hover:scale-95 transition-transform"
              >
                <div className="mt-20">
                  <LinkDetailPost link={link} />
                </div>
                <div className="text-right mt-6 p-4">
                  <DeleteButton linkId={link.id} deleteLink={deleteLink} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : !loading ? (
        <NoLinksToday />
      ) : null}
    </main>
  );
};

export default Dashboard;
