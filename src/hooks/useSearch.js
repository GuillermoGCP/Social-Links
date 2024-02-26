import { useState } from "react";
import { useSearchParams } from "react-router-dom";
const useSearch = (state) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState();

  const q = searchParams.get("q") ?? "";

  const searchHandler = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    const info = e.target.value;
    const queryData = {
      q: info,
    };
    setSearchParams(queryData);
  };
  const filteredLinks = state?.filter((link) => {
    return (
      link.title.toLowerCase().includes(q.toLowerCase()) ||
      link.description.toLowerCase().includes(q.toLowerCase()) ||
      link.url.toLowerCase().includes(q.toLocaleLowerCase()) ||
      link.name.toLowerCase().includes(q.toLocaleLowerCase())
    );
  });
  return {
    filteredLinks,
    searchHandler,
    setSearchParams,
    inputValue,
    setInputValue,
  };
};
export default useSearch;
