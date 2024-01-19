import { useParams, useLocation } from "react-router-dom";
import OneLink from "../components/OneLink";
import PropTypes from "prop-types";
import PageNotFound from "./PageNotFound";

const LinkDetailsPage = () => {
  const location = useLocation();
  const dataLink = location?.state?.mainPageState || [];
  const { id } = useParams();
  const link = dataLink.find((p) => p.id === Number(id));

  if (!link) return <PageNotFound />;

  return (
    <section>
      <OneLink key={link.id} link={link} />
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
