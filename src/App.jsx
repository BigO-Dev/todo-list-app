import { Container } from 'react-bootstrap'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <Container className='mt-5'>
      <h2 className='text-center my-4'>Omair's Todo List</h2>
      <TodoForm />
      <TodoList />
    </Container>
  )
}

export default App
