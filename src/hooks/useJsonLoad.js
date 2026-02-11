import { useEffect, useState } from 'react';

export function useJsonLoad() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData([]);
    setError(null);
    fetch('/json/movies.json')
      .then((res) => {
        if (!res) throw new Error('Failed to load JSON!');
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError('An error occured.' + err);
      });
  }, []);

  return { data, loading, error };
}
