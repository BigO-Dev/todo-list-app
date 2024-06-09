import { useContext } from 'react'
import { TodosContext } from '../context/TodoContext'
import { Stack } from 'react-bootstrap'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = useContext(TodosContext)

  return (
    <div className='mt-5'>
      <Stack gap={3}>
        {todos.map((todo) => (
          <TodoItem todoItem={todo} key={todo.id} />
        ))}
      </Stack>
    </div>
  )
}

export default TodoList
