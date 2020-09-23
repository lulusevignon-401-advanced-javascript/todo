import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useAjax from './ajaxHook';


import './todo.scss';

function ToDo() {

  const { list, setList } = useAjax('http://localhost:3000/api/v1/todos')

  // useEffect( () => {

  //   async function fetchData(){
  //   const response = await axios.get('http://localhost:3000/api/v1/todos');

  //   setList(response.data.results);  
  //   }

  //   fetchData();


    // let updatedList = [
    //   { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
    //   { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
    //   { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
    //   { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
    //   { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    // ];

    // setList(updatedList);
  // }, []);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let updatedList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(updatedList);
    }

  };


  return (
    <>
      <Container>
    
      <Row className="managerList">
          <Col>
        <header>
          <Navbar bg="dark" style={{ color : "#FFF" }}>
          <h2>
          To Do List Manager ({list.filter(item => !item.complete).length}) 
          </h2>
          </Navbar>
        
        </header>
        </Col>
        </Row>

      <Row>
          <Col md={4}>
       
        {/* <section className="todo"> */}

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>
          </Col>

          <Col md={8}>
          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
              />
          </div>
          </Col>
        {/* </section> */}
           
        </Row>
   
        </Container>
    </>
  );
}


export default ToDo;