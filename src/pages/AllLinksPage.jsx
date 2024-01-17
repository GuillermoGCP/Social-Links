import { useContext, useEffect, useState } from "react";

import useApiRequest from "../hooks/useApiRequest";
import { tokenContext } from "../contexs/tokenContext";

const AllLinksPage = () => {
  const { fetchData } = useApiRequest();
  const [allLinks, setAllLinks] = useState([]);
  const [tokenState] = useContext(tokenContext);

  useEffect(() => {
    const fetchLinks = () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL + "links?today=true";
        const onSuccess = (data) => setAllLinks(data.links);
        const onError = (error) => console.error(error);
        const urlData = {
          headers: {
            Authorization: `Bearer ${tokenState}`,
          },
        };

        fetchData(url, urlData, onSuccess, onError);
        console.log(allLinks);
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    };

    fetchLinks();
  }, [fetchData, tokenState]);

  return (
    <>
      <div>Links Publicados</div>
      <div>
        <ul>
          {allLinks.map((link) => (
            <li key={link.id}>
              <p>{`Título: ${link.title}`}</p>
              <p>{`URL: ${link.url}`}</p>
              <p>{`Descripción: ${link.description}`}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AllLinksPage;
