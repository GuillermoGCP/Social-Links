import NameForm from "./NameForm";
import InputUrl from "./InputUrl";
import ButtonForm from "./ButtonForm";
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
      <InputUrl urlState={urlState} setUrlState={setUrlState}>
        Url
      </InputUrl>
      <NameForm titleState={titleState} setTitleState={setTitleState}>
        Title
      </NameForm>
      <NameForm>
        {" "}
        descriptionState ={descriptionState} setDescriptionState=
        {setDescriptionState} Description
      </NameForm>
      <ButtonForm handler={linkHandler}>Crea tu link</ButtonForm>
    </>
  );
};

export default PostLink;
