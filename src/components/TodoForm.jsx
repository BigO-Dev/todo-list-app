import { useRef, useContext, useState, useEffect } from 'react'
import { TodosDispatchContext } from '../context/TodoContext'
import { Button, Form, FormGroup } from 'react-bootstrap'

const TodoForm = () => {
  const dispatch = useContext(TodosDispatchContext)

  const todoRef = useRef()
  const notesRef = useRef()

  const handleSubmit = () => {
    const newTodoItem = {
      id: Math.floor(Math.random() * 1000),
      todo: todoRef.current.value,
      notes: notesRef.current.value,
    }

    dispatch({ type: 'ADD_TODO', payload: newTodoItem })

    todoRef.current.value = ''
    notesRef.current.value = ''
  }

  return (
    <Form>
      <FormGroup className='mb-3'>
        <Form.Control
          placeholder='Enter your todo item here...'
          type='text'
          ref={todoRef}
        />
      </FormGroup>
      <FormGroup>
        <Form.Control placeholder='Notes...' as='textarea' ref={notesRef} />
      </FormGroup>
      <Button variant='primary' className='mt-3' onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  )
}

export default TodoForm
