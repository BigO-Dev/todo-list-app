import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import HomeworkForm from './components/HomeworkForm'
import HomeworkList from './components/HomeworkList'

const App = () => {
  const [assignments, setAssignments] = useState([
    {
      task: 'Complete the React homework',
      notes: 'Understand how functional components work',
    },
    {
      task: 'Complete the Python homework',
      notes: 'Do the exercises at the end of the chapter',
    },
    {
      task: 'Complete the JavaScript homework',
      notes: 'Understand how to use the fetch API',
    },
  ])

  const [taskIndex, setTaskIndex] = useState(0)
  const [inputValue, setInputValue] = useState({
    task: '',
    notes: '',
    dueDate: '',
  })

  const handleEdit = (task, notes, index) => {
    setInputValue({ task, notes })
    setTaskIndex(index)
  }

  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>School Hub</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#homework'>Homework</Nav.Link>
            <Nav.Link href='#grades'>Grades</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <h2 className='text-center my-3'></h2>
        <HomeworkForm
          setAssignments={setAssignments}
          taskIndex={taskIndex}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <HomeworkList
          assignments={assignments}
          setTodos={assignments}
          handleEdit={handleEdit}
        />
      </Container>
    </>
  )
}

export default App
