import TextInput from "./TextInput";
import UrlInput from "./UrlInput";
import Button from "./Button";
import useCreateLink from "../hooks/useCreateLink";

const PostLink = () => {
  const {
    linkHandler,
    urlState,
    titleState,
    descriptionState,
    setTitleState,
    setUrlState,
    setDescriptionState,
  } = useCreateLink();

  return (
    <article className="max-w-xl mx-auto p-2 bg-white shadow-md rounded-md h-auto">
      <form className="space-y-4 p-7">
        <UrlInput
          urlState={urlState}
          setUrlState={setUrlState}
          placeholder="Escribe tu url favorita"
        >
          Url
        </UrlInput>
        <TextInput
          name={titleState}
          setName={setTitleState}
          placeholder="Título"
        >
          Title
        </TextInput>
        <TextInput
          name={descriptionState}
          setName={setDescriptionState}
          placeholder="Describe el sitio web"
        >
          Description
        </TextInput>
        <div className="p-4">
          <Button handler={linkHandler}>Comparte tu link</Button>
        </div>
      </form>
    </article>
  );
};

export default PostLink;
