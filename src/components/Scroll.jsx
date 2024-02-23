const Scroll = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={scrollToTop}
      className="mb-8 fixed bottom-8 right-8 bg-transparent text-gray-300 px-4 py-2 rounded-full shadow-md border border-gray-300 hover:bg-indigo-400 hover:text-white transition-all duration-300 cursor-pointer"
    >
      ↑
    </div>
  );
};
export default Scroll;
