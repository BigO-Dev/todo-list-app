import { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const TodoForm = ({ setTodos, inputValue, setInputValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    setTodos((prevTodos) => {
      return [...prevTodos, inputValue]
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

export default TodoForm
