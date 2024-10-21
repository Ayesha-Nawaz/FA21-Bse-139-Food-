import { useState, useEffect } from "react";

const CustomHookApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        console.log("Fetched data:", json); // Log the fetched data for debugging
        setData(json);
      } catch (error) {
        console.error("Failed to fetch:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [url]);

  return { data, loading, error };
};

export default CustomHookApi;
