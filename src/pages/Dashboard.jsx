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

const Dashboard = () => {
  const [tokenState, , profileInfo] = React.useContext(tokenContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);
  const { state, deleteLink } = useAllLinks();
  const { filteredLinks, searchHandler } = useSearch(state);
  const orderFilteredLinks = filteredLinks.sort((a, b) => {
    return b.id - a.id;
  });
  const newOwnLinks = orderFilteredLinks.filter(
    (id) => id.ownerId === profileInfo.id
  );

  return (
    <main>
      <article className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-md rounded-md flex space-between items-center justify-around">
        <AvatarComponent profileInfo={profileInfo} />
        <ProfileCard profileInfo={profileInfo} />
      </article>

      <article className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-md rounded-md text-center">
        <Search handler={searchHandler} placeholder="Buscador" />
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
            <p>No hay enlaces compartidos.</p>
          )}
        </div>
      </article>
    </main>
  );
};

export default Dashboard;
