import TextInput from "./TextInput";
import UrlInput from "../components/UrlInput";
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
    <>
      <UrlInput urlState={urlState} setUrlState={setUrlState}>
        Url
      </UrlInput>
      <TextInput name={titleState} setName={setTitleState}>
        Title
      </TextInput>
      <TextInput name={descriptionState} setName={setDescriptionState}>
        Description
      </TextInput>
      <Button handler={linkHandler}>Crea tu link</Button>
    </>
  );
};

export default PostLink;
