import PropTypes from "prop-types";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { useState } from "react";
import { ClockLoader } from "react-spinners";

const EmbeddedPage = ({ link }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && (
        <>
          <div className="mt-72 mr-6"> 
            <ClockLoader color="#4f46e5" size={70} />
          </div>
        </>
      )}
      {
        <LinkPreview
          url={link.url}
          fetcher={async (url) => {
            const response = await fetch(
              `https://og-proxy-hab.vercel.app/v2/?url=${url}`
            );
            const json = await response.json();
            setLoading(false);
            return json.metadata;
          }}
          fallback={
            <p className=" font-medium text-slate-600 text-2xl">
              No hay vista previa
            </p>
          }
        />
      }
    </>
  );

};

EmbeddedPage.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  h1: PropTypes.string,
  link: PropTypes.object,
};

export default EmbeddedPage;
