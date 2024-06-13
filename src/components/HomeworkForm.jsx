import PropTypes from 'prop-types'
import { Button, Form } from 'react-bootstrap'

const TodoForm = ({ setAssignments, inputValue, setInputValue, taskIndex }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    setAssignments((prevTasks) => {
      return prevTasks.map((task, index) => {
        if (index === taskIndex) {
          return { ...inputValue }
        } else {
          return task
        }
      })
    })

    setInputValue({ task: '', notes: '', dueDate: '' })
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
      <Form.Text>Due date:</Form.Text>
      <Form.Control
        type='date'
        className='mb-2'
        value={inputValue.dueDate}
        onChange={(e) =>
          setInputValue({ ...inputValue, dueDate: e.target.value })
        }
      />
      <Button type='submit' onClick={handleSubmit}>
        Add task
      </Button>
    </Form>
  )
}

TodoForm.propTypes = {
  setAssignments: PropTypes.func.isRequired,
  inputValue: PropTypes.object.isRequired,
  setInputValue: PropTypes.func.isRequired,
  taskIndex: PropTypes.number.isRequired,
}

export default TodoForm
