import { useEffect, useState, useContext } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getInspectionApi = async () => {
    try {
      const response = await yelp.get();
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
