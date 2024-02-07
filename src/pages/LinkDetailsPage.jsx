import { useParams, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PageNotFound from "./PageNotFound";
import EmbeddedPage from "./EmbeddedPage";
import DropDown from "../components/DropDown";
import { useMediaQuery } from "@mui/material";

const LinkDetailsPage = () => {
  const location = useLocation();
  const dataLink = location?.state?.mainPageState || [];
  const { id } = useParams();
  const link = dataLink.find((p) => p.id === Number(id));

  const isSmallScreen = useMediaQuery("(max-width: 780px)");

  if (!link) return <PageNotFound />;

  return (
    <main className="min-h-screen flex justify-center items-start ">
      {isSmallScreen ? (
        <section className="flex flex-col  items-center justify-stretch bg-slate-100/50 max-w-2xl gap-4 mt-20 shadow-md rounded-3xl">
          <div className="mt-10 w-auto">
            <DropDown link={link} />
          </div>
          <div className="mb-10">
            <EmbeddedPage link={link} />
          </div>
        </section>
      ) : (
        <section className="flex justify-center items-center m-20 p-4 shadow-md rounded-3xl bg-slate-100/50 max-w-6xl">
          <DropDown link={link} />
          <div className="">
            <EmbeddedPage link={link} />
          </div>
        </section>
      )}
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
