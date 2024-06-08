import { Container, Row, Stack } from 'react-bootstrap'
import TodoForm from './TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <Container>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2>Todo List</h2>
        <TodoForm />
        <TodoList />
      </div>
    </Container>
  )
}

export default App
