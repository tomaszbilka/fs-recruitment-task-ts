import { useState } from 'react';

const useHttp = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const sendRequest = (url, query, method, body) => {
    setIsLoading(true);
    fetch(`${url}${query}`, {
      method: method,
      body: body,
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  return [sendRequest, data, isLoading, error];
};

export default useHttp;
