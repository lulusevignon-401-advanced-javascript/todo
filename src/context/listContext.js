import React, { useState } from 'react';

export const ListContext = React.createContext();

function ListProvider(props){

  // const [sortBy, setSortBy] = useState('difficulty');

  // const setSort = (string) =>{
  //   setSortBy(string)
  // } 

  const [maxVisible, setMaxVisible] = useState(3);
  const [showCompleted, setShowCompleted] = useState(true);

  const state = {
    // sortBy,
    // setSort,
    maxVisible,
    setMaxVisible,
    showCompleted,
    setShowCompleted
  }

  return (
    <ListContext.Provider value={state}>
      {props.children}
    </ListContext.Provider>
  );
}

export default ListProvider;