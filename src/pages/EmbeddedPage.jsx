import PropTypes from "prop-types";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import useShortUrl from "../hooks/useShortUrl";

const EmbeddedPage = ({ link }) => {
  const { shortUrl } = useShortUrl(link.url);
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
        <>
          <p className=" font-medium text-slate-600 mx-10 mt-44  text-xl">
            No hay vista previa
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link.url}
            className="text-slate-600 text-lg text-center underline block hover:text-indigo-400 mb-40"
          >
            {shortUrl}
          </a>
        </>
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
