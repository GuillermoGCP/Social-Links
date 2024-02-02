const LinkDetailPost = (link) => {
  const url =
    import.meta.env.VITE_SERVER_URL + `/uploads/${link.link.profilePicture}`;
  console.log(link);
  return (
    <section className="h-[70vh]">
      <div className="flex justify-center items-center h-screem mt-40 min-h-5">
        <div className="flex flex-col rounded-lg bg-white shadow-[0_2px15px-3px_rgba(0,0,0,0.07),0_10px20px-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row ">
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={url}
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              {link.link.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {link.link.description}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
              {link.link.url}
            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
};
export default LinkDetailPost;
