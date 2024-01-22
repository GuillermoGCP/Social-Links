import React from "react";
import { tokenContext } from "../contexs/tokenContext";
import { useNavigate } from "react-router-dom";
import useAllLinks from "../hooks/useAlllinks";
import DeleteButton from "../components/DeleteButton";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tokenState, , profileInfo] = React.useContext(tokenContext);
  const url =
    import.meta.env.VITE_SERVER_URL + `/uploads/${profileInfo.profilePicture}`;

  const { state } = useAllLinks();

  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);

  return (
    <article className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">Mi perfil</h1>
      <p className="text-gray-700 mb-4">{profileInfo.biography}</p>
      <img
        src={url}
        alt="Imagen del usuario"
        className="w-full max-h-64 object-contain rounded-md mb-4"
      />

      <div className="h-[50vh] overflow-y-auto mb-8">
        <h2 className="text-xl font-bold mb-4">Links que has compartido</h2>
        <ul>
          {state
            .filter((id) => id.ownerId === profileInfo.id)
            .map((link) => {
              return (
                <article key={link.id} className="mb-4">
                  <li className="mb-2">
                    <h1 className="text-lg font-semibold">{link.title}</h1>
                    <a href={link.url} className="text-blue-500">
                      {link.url}
                    </a>
                    <p className="text-gray-700">{link.description}</p>
                  </li>
                  <div className="text-right p-4">
                    <DeleteButton linkId={link.id} />
                  </div>
                </article>
              );
            })}
        </ul>
      </div>
    </article>
  );
};

export default Dashboard;
