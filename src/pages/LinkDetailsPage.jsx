import { useParams, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PageNotFound from "./PageNotFound";
import EmbeddedPage from "./EmbeddedPage";
import DropDown from "../components/DropDown";
import { useMediaQuery } from "@mui/material";
import CommentBox from "../components/CommentBox";
import CommentListComponent from "../components/CommentListComponent";

const LinkDetailsPage = () => {
  const location = useLocation();
  const dataLink = location?.state?.mainPageState || [];
  const { id } = useParams();
  const link = dataLink.find((p) => p.id === Number(id));

  const isSmallScreen = useMediaQuery("(max-width: 740px)");

  if (!link) return <PageNotFound />;

  return (
    <main className="flex flex-col">
      <section className=" flex justify-center items-start ">
        {isSmallScreen ? (
          <article className="flex flex-col  items-center  bg-slate-100/50 w-5/6 mt-20 shadow-md rounded-3xl">
            <div className="mt-4">
              <DropDown link={link} />
            </div>
            <div className="mt-4 mb-4">
              <EmbeddedPage link={link} />
            </div>
          </article>
        ) : (
          <>
            <section className="flex items-start m-20 p-4 shadow-md rounded-3xl bg-slate-100/50 max-w-6xl">
              <div>
                <DropDown link={link} />
              </div>

              <div className="ml-4">
                <EmbeddedPage link={link} />
              </div>
            </section>
          </>
        )}
      </section>
      <div>
        <CommentBox link={link} />
      </div>
      <div className="flex justify-center">
        <CommentListComponent linkId={link.id} />
      </div>
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
