import { useState, useContext } from 'react'
import { TodosContext } from '../context/TodoContext'
import { Stack } from 'react-bootstrap'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

const TodoList = () => {
  const todos = useContext(TodosContext)

  return (
    <div className='mt-5'>
      <TodoForm />
      <Stack gap={3}>
        {todos.map((todo) => (
          <TodoItem
            todoItem={todo}
            key={todo.id}
            formContent={formContent}
            setFormContent={setFormContent}
          />
        ))}
      </Stack>
    </div>
  )
}

export default TodoList
