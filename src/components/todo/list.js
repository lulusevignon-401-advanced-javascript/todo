import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Toast from 'react-bootstrap/Toast'
import Badge from 'react-bootstrap/Badge'

function TodoList(props) {
  return (
    <ListGroup>
      {props.list.map(item => (
        <ListGroup.Item key={item._id}>
          <Toast>
    <Toast.Header onClick={() => props.handleDelete(item._id)}>
    <Badge pill action variant={ item.complete ? "success" : "danger"}className="mr-auto" onClick={() => props.handleComplete(item._id)}><strong>{item.complete? "complete" : "pending" }</strong></Badge>
    
      
      <small>{item.assignee}</small>
      
    </Toast.Header>
    <Toast.Body >
      <small>Difficulty: {item.difficulty}</small>
  <p><strong>{item.text}</strong></p>
      </Toast.Body>
  </Toast>
          
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}


export default TodoList; 
