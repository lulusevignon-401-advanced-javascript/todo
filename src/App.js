import React from 'react';
import ToDo from './components/todo/todo.js';
import Header from './header.js';
import ListProvider from './context/listContext'
import LoginProvider from './context/listContext'

import Auth from './components/todo/auth';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
     <LoginProvider>
    <ListProvider>
    <Header />
    <ToDo/>
    </ListProvider>
    </LoginProvider>
    </>
  );
}

export default App;
