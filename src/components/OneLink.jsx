const OneLink = (link) => {
  console.log(link);
  return (
    <div>
      <p>{`Título: ${link.link.title}`}</p>
      <p>{`URL: ${link.link.url}`}</p>
      <p>{`Description: ${link.link.description}`}</p>
    </div>
  );
};
export default OneLink;
