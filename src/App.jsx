import { useState } from 'react'
import { Container } from 'react-bootstrap'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([
    { task: 'Buy groceries', notes: 'Milk, eggs, bread' },
    { task: 'Do laundry', notes: 'Whites and darks' },
    { task: 'Mow the lawn', notes: 'Backyard only' },
  ])

  const [inputValue, setInputValue] = useState({ task: '', notes: '' })

  const handleEdit = (task, notes) => {
    setInputValue({ task, notes })
  }

  return (
    <Container>
      <h2 className='text-center my-3'>Omair's Todo List</h2>
      <TodoForm
        setTodos={setTodos}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <TodoList todos={todos} setTodos={setTodos} handleEdit={handleEdit} />
    </Container>
  )
}

export default App
