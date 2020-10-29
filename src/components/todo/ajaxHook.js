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

  // async function postTask(){


  // }

  // async function updateTask(){

  // }

  // async function deleteTask(id){
  //   await axios.delete(`${url}/${id}`);
  //   let newList = list.filter(item => item._id !== id);

  //   return setList(newList);
  // }


  return {
    list,
    setList,
  }

}

export default useAjax;
