import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getInspectionApi = async () => {
    console.log('Hi there!');
    try {
      const response = await yelp.get();
      console.log(response.data.result);
      setResults(response.data.result);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    getInspectionApi();
  }, []);

  return [getInspectionApi, results, errorMessage];
};
