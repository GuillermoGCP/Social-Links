import { useParams, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PageNotFound from "./PageNotFound";
import LinkDetailPost from "../components/LinkDetailPost";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { tokenContext } from "../contexs/tokenContext";

const LinkDetailsPage = () => {
  const location = useLocation();
  const dataLink = location?.state?.mainPageState || [];
  const { id } = useParams();
  const link = dataLink.find((p) => p.id === Number(id));
  const navigate = useNavigate();
  const [tokenState] = useContext(tokenContext);
  React.useEffect(() => {
    if (!tokenState) {
      navigate("/");
    }
  }, [tokenState, navigate]);

  if (!link) return <PageNotFound />;
  return (
    <section>
      <LinkDetailPost key={link.id} link={link} />
    </section>
  );
};

LinkDetailsPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      mainPageState: PropTypes.array,
    }),
  }),
};

export default LinkDetailsPage;
