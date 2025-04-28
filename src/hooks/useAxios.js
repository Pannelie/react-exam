import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //deklarerar en abortController jag kan använda sen. Används för att avbryta pågående API anrop när man
    // t.ex. försöker uppdatera ett state i en komponent som demountats.
    const controller = new AbortController();

    //signalen finns alltid med (tyst). Aktiveras bara om vi avbryter. Händer inget så påverkar signalen inte anropet alls.
    axios
      .get(url, { signal: controller.signal })
      .then((response) => {
        setData(response.data.events);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log(`Anrop avbrutet`);
        } else {
          setError(error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useAxios;
