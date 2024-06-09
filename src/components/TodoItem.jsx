import { useContext } from 'react'
import { TodosDispatchContext } from '../context/TodoContext'
import { Card, Button } from 'react-bootstrap'

const TodoItem = ({ todoItem, formContent, setFormContent }) => {
  const dispatch = useContext(TodosDispatchContext)

  const handleEdit = (todoItem, todoNotes) => {
    setFormContent({ todo: todoItem, notes: todoNotes })
  }

  return (
    <Card key={todoItem.id}>
      <Card.Body>
        <Card.Title>{todoItem.todo}</Card.Title>
        <Card.Text>{todoItem.notes}</Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-end gap-2'>
        <Button
          variant='warning'
          onClick={() => handleEdit(todoItem.todo, todoItem.notes)}
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
