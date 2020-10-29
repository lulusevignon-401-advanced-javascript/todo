import React from 'react';
import ToDo from './components/todo/todo.js';
import Header from './header.js';
import ListProvider from './context/listContext'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <ListProvider>
    <Header />
    <ToDo/>
    </ListProvider>
    </>
  );
}

export default App;
