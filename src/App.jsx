import { useState } from 'react'
import { Container } from 'react-bootstrap'
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
      <Container>
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
