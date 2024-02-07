import PropTypes from "prop-types";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

const EmbeddedPage = ({ link }) => {
  return (
    <LinkPreview
      url={link.url}
      fetcher={async (url) => {
        const response = await fetch(
          `https://og-proxy-hab.vercel.app/v2/?url=${url}`
        );
        const json = await response.json();
        return json.metadata;
      }}
      fallback={
        <p className=" font-medium text-slate-600 text-2xl">
          No hay vista previa
        </p>
      }
    />
  );
};

EmbeddedPage.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  h1: PropTypes.string,
  link: PropTypes.object,
};

export default EmbeddedPage;
