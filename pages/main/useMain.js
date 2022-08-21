import { getData } from '../api/hello';
import {useState, useEffect } from 'react';

const useMain = () => {
    const [cardData, setCardData] = useState([]);
    const [chartData, setChartData] = useState([]);
    
    useEffect(()=> {
        getData().then(res => {
          setCardData(res.data.payload.cards);
          setChartData(res.data.payload.graphs);
        }).catch(err=> console.log(err));
       }, []);

  return {cardData, chartData}
  
}

export default useMain