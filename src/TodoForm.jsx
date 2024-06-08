import { Button, Row, Col, Form } from 'react-bootstrap'

const TodoForm = () => {
  return (
    <Form>
      <Row className='justify-content-md-center'>
        <Col>
          <Form.Control type='text' />
        </Col>
        <Col>
          <Button type='submit'>Add Task</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default TodoForm
