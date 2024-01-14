const useApiRequest = () => {
  const fetchData = async (url, urlData = {}, onSuccess, onError) => {
    try {
      const res = await fetch(url, urlData);
      const body = await res.json();
      if (res.ok) {
        onSuccess(body);
      } else {
        onError(body);
      }
    } catch (error) {
      onError(error);
    }
  };

  return { fetchData };
};

export default useApiRequest;
