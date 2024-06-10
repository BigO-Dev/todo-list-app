import { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import TodoList from './TodoList'

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

export default TodoForm
