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

  return (
    <main>
      <article className="max-w-3xl mx-auto my-8 p-6 bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500 shadow-md rounded-md flex space-between items-center justify-around gap-5 ">
        <AvatarComponent profileInfo={profileInfo} loading={loading} />
        <ProfileCard profileInfo={profileInfo} loading={loading} />
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
        <article className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-md rounded-md text-center min-h-screen">
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
          {newOwnLinks.length !== 0 ? (
            <h2 className="text-xl font-bold mb-4">Links que has compartido</h2>
          ) : null}
          <div className="h-[50vh] overflow-y-auto mb-8">
            {newOwnLinks.length !== 0 ? (
              <ul>
                {newOwnLinks.map((link) => (
                  <li key={link.id} className="p-4 border-2 border-x-slate-200">
                    <LinkDetailPost link={link} />
                    <div className="text-right p-4">
                      <DeleteButton linkId={link.id} deleteLink={deleteLink} />
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <NoLinksToday />
              </>
            )}
          </div>
        </article>
      )}
    </main>
  );
};

export default Dashboard;
