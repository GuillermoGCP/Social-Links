import { toast } from "react-toastify";

const useApiRequest = () => {
  const fetchData = async (url, urlData = {}, onSuccess, onError) => {
    try {
      const res = await fetch(url, urlData);
      const body = res.status === 204 ? null : await res.json();

      if (res.ok) {
        onSuccess(body);
      } else {
        onError(body);
      }
    } catch (error) {
      toast.error(error.message);
      onError(error);
    }
  };

  return { fetchData };
};

export default useApiRequest;
