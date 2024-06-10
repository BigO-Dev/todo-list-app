import { Stack, Card, Button } from 'react-bootstrap'

const TodoList = ({ todos, setTodos, handleEdit }) => {
  const handleDelete = (index) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo, i) => i !== index)
    })
  }

  return (
    <Stack className='my-5' gap={3}>
      {todos.map((todo, index) => (
        <Card key={index} className='p-3'>
          <Card.Title>
            <h3>{todo.task}</h3>
          </Card.Title>
          <Card.Text>{todo.notes}</Card.Text>
          <Card.Footer>
            <small className='text-muted'>
              Created at: {new Date().toLocaleString()}
            </small>
            <div className='d-flex justify-content-end'>
              <Button
                variant='warning'
                className='mx-1'
                onClick={() => handleEdit(todo.task, todo.notes)}
              >
                Edit
              </Button>
              <Button
                variant='danger'
                className='mx-1'
                onClick={() => handleDelete(index)}
              >
                Delete
              </Button>
            </div>
          </Card.Footer>
        </Card>
      ))}
    </Stack>
  )
}

export default TodoList
