import TextInput from "./TextInput";
import UrlInput from "./UrlInput";
import Button from "./Button";
import useCreateLink from "../hooks/useCreateLink";
import PropTypes from "prop-types";

const PostLink = ({ addNewLink }) => {
  const {
    linkHandler,
    urlState,
    titleState,
    descriptionState,
    setTitleState,
    setUrlState,
    setDescriptionState,
  } = useCreateLink(addNewLink);

  return (
    <article className="max-w-xl mx-auto p-2 bg-white shadow-md rounded-md h-auto">
      <form className="space-y-4 p-7">
        <UrlInput
          urlState={urlState}
          setUrlState={setUrlState}
          placeholder="https://..."
        >
          Url
        </UrlInput>
        <TextInput
          name={titleState}
          setName={setTitleState}
          placeholder="Máximo 24 caracteres"
        >
          Título
        </TextInput>
        <TextInput
          name={descriptionState}
          setName={setDescriptionState}
          placeholder="Describe el sitio web"
        >
          Descripción
        </TextInput>
        <div className="p-4">
          <Button handler={linkHandler}>Comparte tu link</Button>
        </div>
      </form>
    </article>
  );
};
PostLink.propTypes = {
  addNewLink: PropTypes.func,
};
export default PostLink;
