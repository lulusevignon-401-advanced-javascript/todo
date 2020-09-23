import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import useForm from './formHook.js'

function TodoForm(props){

  // const [request, setRequest] = useState({});
  const [handleSubmit, handleChange] = useForm(submitForm);

  // useEffect(() =>{
  //   setRequest({...props.request});
  // }, [props]);

  function submitForm(task){
    // setRequest(text);
    props.handleSubmit(task);
    console.log('task', task);
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   props.handleSubmit(request.item);
  //   const item = {};
  //   setRequest({item});
  // };

  // const handleInputChange = e => {
  //     setRequest({ item: {...request, [e.target.name]: e.target.value } });
  //   };

  // returnx (
  //   <Card>
  //     <h3>Add Item</h3>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         <span>To Do Item</span>
  //         <input
  //           name="text"
  //           placeholder="Add To Do List Item"
  //           onChange={handleInputChange}
  //         />
  //       </label>
  //       <label>
  //         <span>Difficulty Rating</span>
  //         <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
  //       </label>
  //       <label>
  //         <span>Assigned To</span>
  //         <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
  //       </label>
  //       <Button>Add Item</Button>
  //     </form>
  //   </Card>
  // );


  return (
    <Card>
      <Card.Body>
  <Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicTask">
    <Form.Label>Add Item</Form.Label>
    <Form.Control name="text" type="text" placeholder="Item Details" onChange={handleChange} />
    
  </Form.Group>
  <Form.Group controlId="formBasicRating">
  <Form.Label>Difficulty Rating</Form.Label>
  <Form.Control name="difficulty" type="range" defaultValue="1" min="1" max="5" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="formBasicAssignee">
    <Form.Label>Assigned To</Form.Label>
    <Form.Control  name="assignee" type="text" placeholder="Assignee" onChange={handleChange} />
  
  </Form.Group>
  <Button variant="primary" type="submit">
    Add Item
  </Button>
</Form>
</Card.Body>
</Card>
  );

}

export default TodoForm;