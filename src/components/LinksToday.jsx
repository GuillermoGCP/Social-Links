import React, { useContext } from "react";
import useLinksToday from "../hooks/useLinksToday";
import NoLinksToday from "./NoLinksToday";
import OneLink from "./OneLink";
import { tokenContext } from "../contexs/tokenContext";
import { useNavigate } from "react-router-dom";
const LinksToday = () => {
  const [tokenState] = useContext(tokenContext);
  const navigate = useNavigate();
  const { today, changeRating2 } = useLinksToday();
  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);
  return (
    <section className="max-w-2xl h-screen mx-auto mt-8 p-4">
      <ul>
        {today ? (
          today.map((link) => (
            <div
              key={link.id}
              className="p-4 hover:scale-95 transition-transform"
            >
              <OneLink
                key={link.id}
                link={link}
                changeRating2={changeRating2}
              />
              <div className="p-5 max-w-xs mx-auto"></div>
            </div>
          ))
        ) : (
          <NoLinksToday />
        )}
      </ul>
    </section>
  );
};

export default LinksToday;
