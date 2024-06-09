import { useContext, useState } from 'react'
import { TodosDispatchContext } from '../context/TodoContext'
import { Button, Form, FormGroup } from 'react-bootstrap'

const TodoForm = () => {
  const dispatch = useContext(TodosDispatchContext)
  const [formContent, setFormContent] = useState({ todo: '', notes: '' })

  const handleSubmit = () => {
    const newTodoItem = {
      id: Math.floor(Math.random() * 1000),
      todo: formContent.todo,
      notes: formContent.notes,
    }

    dispatch({ type: 'ADD_TODO', payload: newTodoItem })

    setFormContent({ todo: '', notes: '' })
  }

  return (
    <Form>
      <FormGroup className='mb-3'>
        <Form.Control
          placeholder='Enter your todo item here...'
          type='text'
          value={formContent.todo}
          onChange={(e) =>
            setFormContent({ ...formContent, todo: e.target.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Form.Control
          placeholder='Notes...'
          as='textarea'
          value={formContent.notes}
          onChange={(e) =>
            setFormContent({ ...formContent, notes: e.target.value })
          }
        />
      </FormGroup>
      <Button variant='primary' className='mt-3' onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  )
}

export default TodoForm
