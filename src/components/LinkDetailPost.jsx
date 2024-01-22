const LinkDetailPost = (link) => {
  const url =
    import.meta.env.VITE_SERVER_URL + `/uploads/${link.link.profilePicture}`;

  return (
    <>
      <article>
        <h1>{`Título: ${link.link.title}`}</h1>
        <h2>{`URL: ${link.link.url}`}</h2>
        <p>{`Descripción: ${link.link.description}`}</p>
        <p>{`Compartido por: ${link.link.name}`}</p>
        {link.link.profilePicture ? (
          <img
            className="w-11"
            src={url}
            alt="Imagen de perfil del creador del link"
          />
        ) : null}
      </article>
    </>
  );
};
export default LinkDetailPost;
