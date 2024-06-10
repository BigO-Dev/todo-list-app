import PropTypes from 'prop-types'
import { Button, Form } from 'react-bootstrap'

const TodoForm = ({ setTodos, inputValue, setInputValue, todoIndex }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    setTodos((prevTodos) => {
      return prevTodos.map((todo, index) => {
        if (index === todoIndex) {
          return { ...inputValue }
        } else {
          return todo
        }
      })
    })

    setInputValue({ task: '', notes: '' })
  }

  return (
    <Form>
      <Form.Control
        className='mb-2'
        type='text'
        placeholder='Add todo...'
        value={inputValue.task}
        onChange={(e) => setInputValue({ ...inputValue, task: e.target.value })}
      />
      <Form.Control
        className='mb-2'
        as='textarea'
        rows={5}
        placeholder='Add notes...'
        value={inputValue.notes}
        onChange={(e) =>
          setInputValue({ ...inputValue, notes: e.target.value })
        }
      />
      <Button type='submit' onClick={handleSubmit}>
        Add task
      </Button>
    </Form>
  )
}

TodoForm.propTypes = {
  setTodos: PropTypes.func.isRequired,
  inputValue: PropTypes.object.isRequired,
  setInputValue: PropTypes.func.isRequired,
  todoIndex: PropTypes.number.isRequired,
}

export default TodoForm
