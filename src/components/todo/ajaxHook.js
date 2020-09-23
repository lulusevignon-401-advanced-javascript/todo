import { useEffect, useState } from 'react';
import axios from 'axios'

const useAjax = (url) => {


  const [list, setList] = useState([]);
  


  useEffect(() => {

    async function fetchData() {
     
      const response = await axios.get(url);
      const results = response.data.results;
      setList(results);
    
    }

    fetchData();

  }, [url]);


  return {
    list,
    setList,
  }

}

export default useAjax;
