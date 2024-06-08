import { Button, Card, Stack } from 'react-bootstrap'

const TodoList = () => {
  return (
    <div className='mt-5'>
      <Stack gap={3}>
        <Card>
          <Card.Body>
            <Card.Title>Todo #1</Card.Title>
            <Card.Text>This is my first todo item</Card.Text>
          </Card.Body>
          <Card.Footer className='d-flex justify-content-end gap-2'>
            <Button variant='warning'>Edit</Button>
            <Button variant='danger'>Delete</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Todo #2</Card.Title>
            <Card.Text>This is my second todo item</Card.Text>
          </Card.Body>
          <Card.Footer className='d-flex justify-content-end gap-2'>
            <Button variant='warning'>Edit</Button>
            <Button variant='danger'>Delete</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Todo #3</Card.Title>
            <Card.Text>This is my third todo item</Card.Text>
          </Card.Body>
          <Card.Footer className='d-flex justify-content-end gap-2'>
            <Button variant='warning'>Edit</Button>
            <Button variant='danger'>Delete</Button>
          </Card.Footer>
        </Card>
      </Stack>
    </div>
  )
}

export default TodoList
