import { useEffect, useState } from 'react';
import Item from '../item/item';
import { Data } from '../../types/types';
import Input from '../input/input';
// import useHttp from '../../hooks/use-http.js';

const Content: React.FC = () => {
  const [fetchedData, setFetchedData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  //   const [sendRequest, data, isLoading, error] = useHttp();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsInputEmpty(false);
      try {
        const response = await fetch('./data/data.json');

        if (!response.ok) {
          throw new Error('Sth went wrong with fetching data!');
        }
        const data = await response.json();
        setFetchedData(data.response.data);
        console.log(data.response.data);
        setIsLoading(false);
      } catch (err) {
        alert('Sth went wrong');
      }
    };

    fetchData();
  }, [isInputEmpty]);

  const searchInputHandler = (text: string): void => {
    console.log(text);
    if (text === '') {
      setIsInputEmpty(true);
    }
    setFetchedData((prev) => {
      return prev.filter((el) => el.description.includes(text));
    });
  };

  //   useEffect(() => {
  //     sendRequest('./data/data.json', '', 'GET');
  //   }, []);

  return (
    <>
      <Input onSearch={searchInputHandler} />
      {isLoading && <p>Loading...</p>}
      <ul>
        {!isLoading &&
          fetchedData.map((el) => {
            return <Item item={el} key={el.work_order_id} />;
          })}
      </ul>
    </>
  );
};

export default Content;
