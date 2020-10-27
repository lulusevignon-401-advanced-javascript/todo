import React from 'react';
import ToDo from './components/todo/todo.js';
import Header from './header.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header />
    <ToDo/>
    </>
  );
}

export default App;
