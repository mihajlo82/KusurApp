import {useState, useEffect} from 'react'
import useMain from '../../main/useMain';

const useDataChart = (name) => {
    const {chartData} = useMain();
    const [myObj, setMyObj] = useState([]);
   
    useEffect(()=> {
     if(chartData !== undefined || chartData !== null){
      let mo = chartData.filter(x => x.name === name);
      setMyObj(mo)
     }
    }, [chartData])
  return {myObj}
}

export default useDataChart