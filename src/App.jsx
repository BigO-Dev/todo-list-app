import { useReducer } from 'react'
import { Container } from 'react-bootstrap'
import {
  TodosContext,
  TodosDispatchContext,
  EditTodoContext,
} from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, dispatch] = useReducer(todosReducer, [])

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        <Container className='mt-5'>
          <h2 className='text-center my-4'>Omair's Todo List</h2>
          <EditTodoContext.Provider value={{ todo: '', notes: '' }}>
            <TodoList />
          </EditTodoContext.Provider>
        </Container>
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  )
}

export default App

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.payload, ...state]
    case 'EDIT_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      )
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload)
    default:
      return state
  }
}
