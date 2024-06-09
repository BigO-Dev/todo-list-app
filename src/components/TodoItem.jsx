import { useContext } from 'react'
import { TodosDispatchContext, EditTodoContext } from '../context/TodoContext'
import { Card, Button } from 'react-bootstrap'

const TodoItem = ({ todoItem }) => {
  const dispatch = useContext(TodosDispatchContext)

  return (
    <Card key={todoItem.id}>
      <Card.Body>
        <Card.Title>{todoItem.todo}</Card.Title>
        <Card.Text>{todoItem.notes}</Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-end gap-2'>
        <Button
          variant='warning'
          onClick={() =>
            dispatch({
              type: 'EDIT_TODO',
              payload: {
                id: todoItem.id,
                todo: todoItem.todo,
                notes: todoItem.notes,
              },
            })
          }
        >
          Edit
        </Button>
        <Button
          variant='danger'
          onClick={() =>
            dispatch({
              type: 'DELETE_TODO',
              payload: todoItem.id,
            })
          }
        >
          Delete
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default TodoItem
