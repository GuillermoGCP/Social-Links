import { useParams, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PageNotFound from "./PageNotFound";
import EmbeddedPage from "./EmbeddedPage";
import DropDown from "../components/DropDown";

const LinkDetailsPage = () => {
  const location = useLocation();
  const dataLink = location?.state?.mainPageState || [];
  const { id } = useParams();
  const link = dataLink.find((p) => p.id === Number(id));

  if (!link) return <PageNotFound />;

  return (
    <main className="min-h-screen">
      <section className="flex items-center m-20 p-4 shadow-md rounded-3xl bg-slate-100/40 ">
        <div className="flex-1">
          <DropDown link={link} />
        </div>
        <div className="mr-10 ">
          <EmbeddedPage link={link} />
        </div>
      </section>
    </main>
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
