import React from "react";
import { tokenContext } from "../contexs/tokenContext";
import { useNavigate } from "react-router-dom";
import useAllLinks from "../hooks/useAlllinks";
import DeleteButton from "../components/DeleteButton";
import ProfileCard from "../components/ProfileCard";
import AvatarComponent from "../components/AvatarComponent";
import Search from "../components/Search";
import useSearch from "../hooks/useSearch";

const Dashboard = () => {
  const navigate = useNavigate();
  // const [ownLinks, setOwnLinks] = React.useState([]);
  const [tokenState, , profileInfo] = React.useContext(tokenContext);
  const { state, setState } = useAllLinks();
  const updateState = (link) => {
    let newArray = state.filter((newLink) => {
      return newLink.id !== link.id;
    });
    setState(newArray);
    console.log("state", state);
    console.log("newArray", newArray);
  };
  const { filteredLinks, searchHandler } = useSearch(state);
  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);
  console.log(state);
  const orderFilteredLinks = filteredLinks.sort((a, b) => {
    return b.id - a.id;
  });
  const newOwnLinks = orderFilteredLinks.filter(
    (id) => id.ownerId === profileInfo.id
  );
  // React.useEffect(() => {
  //   const newOwnLinks = orderFilteredLinks.filter(
  //     (id) => id.ownerId === profileInfo.id
  //   );
  //   if (newOwnLinks.length !== ownLinks.length) {
  //     setOwnLinks(newOwnLinks);
  //   }
  //   console.log("own", ownLinks);
  //   console.log("new", newOwnLinks);
  // }, [filteredLinks]);

  return (
    <>
      <article className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-md rounded-md flex space-between items-center justify-around">
        <AvatarComponent profileInfo={profileInfo} />
        <ProfileCard profileInfo={profileInfo} />
      </article>
      <Search handler={searchHandler} placeholder="Buscador" />
      <article className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-md rounded-md text-center">
        {newOwnLinks ? (
          <h2 className="text-xl font-bold mb-4">Links que has compartido</h2>
        ) : null}
        <div className="h-[50vh] overflow-y-auto mb-8">
          {newOwnLinks ? (
            <ul>
              {newOwnLinks.map((link) => (
                <article
                  key={link.id}
                  className="p-4 border-2 border-x-slate-200"
                >
                  <li className="mb-2">
                    <h1 className="text-lg font-semibold">{link.title}</h1>
                    <a href={link.url} className="text-blue-500">
                      {link.url}
                    </a>
                    <p className="text-gray-700">{link.description}</p>
                  </li>
                  <div className="text-right p-4">
                    <DeleteButton
                      linkId={link.id}
                      updateState={updateState}
                      // onDeleteSuccess={() => {
                      //   setOwnLinks((prevLinks) =>
                      //     prevLinks.filter(
                      //       (prevLink) => prevLink.id !== link.id
                      //     )
                      //   );
                      // }}
                    />
                  </div>
                </article>
              ))}
            </ul>
          ) : (
            <p>No hay enlaces compartidos.</p>
          )}
        </div>
      </article>
    </>
  );
};

export default Dashboard;
