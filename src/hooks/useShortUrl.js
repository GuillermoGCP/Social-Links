import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const useShortUrl = (longUrl) => {
  const [shortUrl, setShortUrl] = useState("");

  const onError = () => {
    toast.error("Error al acortar la URL");
  };

  useEffect(() => {
    const fetchShortUrl = async () => {
      try {
        const response = await fetch(
          `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
            longUrl
          )}`
        );
        if (!response.ok) {
          throw new Error("Error al acortar la URL");
        }
        const data = await response.text();
        setShortUrl(data);
      } catch (error) {
        onError();
      }
    };
    fetchShortUrl();
  }, [longUrl]);
  return { shortUrl };
};

export default useShortUrl;
