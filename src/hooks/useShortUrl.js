import { useEffect, useState } from "react";
import useApiRequest from "./useApiRequest";

const useShortUrl = (longUrl) => {
  const [shortUrl, setShortUrl] = useState("");

  const onSuccess = (data) => {
    setShortUrl(data.link);
  };

  const onError = () => {
    console.log("Error al acortar la URL");
  };

  const url = "https://api-ssl.bitly.com/v4/shorten";
  const apiKey = "b418ab2ba547a109b95fd8e5fffe7d0146ab9416";
console.log(longUrl);

  const { fetchData } = useApiRequest();
  useEffect(() => {
    const urlData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ long_url: longUrl }),
    };
    fetchData(url, urlData, onSuccess, onError);
  }, [fetchData, longUrl]);
  return { shortUrl };
};

export default useShortUrl;
