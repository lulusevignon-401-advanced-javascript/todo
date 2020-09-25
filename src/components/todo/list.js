import React, {useState, useContext} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Toast from 'react-bootstrap/Toast'
import Badge from 'react-bootstrap/Badge'
import Pagination from 'react-bootstrap/Pagination';

import { ListContext } from '../../context/listContext'


function TodoList(props) {
  const ctx = useContext(ListContext);
  const [page, setPage] = useState(0);

  const list = props.list.filter( item => ctx.showCompleted ? true : !item.complete );
  const start = ctx.maxVisible * page || 0;
  const end = start + ctx.maxVisible || list.length;
  const pages = new Array(Math.ceil(list.length / ctx.maxVisible)).fill('');

  const displayList = list ? list.slice(start, end) : [];


  // list = props.list.sort((a,b) => a[ctx.sortBy] - b[ctx.sortBy] ? -1 : 1)
  return (
    
    <ListGroup>
      {displayList.map(item => (
        <ListGroup.Item key={item._id}>
          <Toast onClose={() => props.handleDelete(item._id)}>
    <Toast.Header >
    <Badge pill action variant={ item.complete ? "success" : "danger"}className="mr-auto" onClick={() => props.handleComplete(item._id)}><strong>{item.complete? "complete" : "pending" }</strong></Badge>
    
      
      <small>{item.assignee}</small>
      {/* <span >x</span> */}
    </Toast.Header>
    <Toast.Body >
      <small>Difficulty: {item.difficulty}</small>
  <p><strong>{item.text}</strong></p>
      </Toast.Body>
  </Toast>
          
        </ListGroup.Item>
      ))}

<Pagination>
        {
          pages.map( (n,i) =>
            <Pagination.Item key={i+1} onClick={() => setPage(i)}>
              {i+1}
            </Pagination.Item>,
          )
        }
      </Pagination>
      
    </ListGroup>
  );
}


export default TodoList; 
