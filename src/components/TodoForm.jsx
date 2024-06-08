import { Button, Form, FormGroup } from 'react-bootstrap'

const TodoForm = () => {
  return (
    <Form>
      <FormGroup className='mb-3'>
        <Form.Control placeholder='Enter your todo item here...' type='text' />
      </FormGroup>
      <FormGroup>
        <Form.Control placeholder='Notes...' as='textarea' />
      </FormGroup>
      <Button variant='primary' className='mt-3'>
        Submit
      </Button>
    </Form>
  )
}

export default TodoForm
