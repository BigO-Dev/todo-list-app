import PropTypes from 'prop-types'
import { Stack, Card, Button } from 'react-bootstrap'

const TodoList = ({ assignments, setAssignments, handleEdit }) => {
  const handleDelete = (index) => {
    setAssignments((prevTask) => {
      return prevTask.filter((task, i) => i !== index)
    })
  }

  return (
    <Stack className='my-5' gap={3}>
      {assignments.map((assignment, index) => (
        <Card key={index} className='p-3'>
          <Card.Title>
            <h3>{assignment.task}</h3>
          </Card.Title>
          <Card.Text>{assignment.notes}</Card.Text>
          <Card.Footer>
            <small className='text-muted'>
              Created at: {new Date().toLocaleString()}
            </small>
            <div className='d-flex justify-content-end'>
              <Button
                variant='warning'
                className='mx-1'
                onClick={() =>
                  handleEdit(assignment.task, assignment.notes, index)
                }
              >
                Edit
              </Button>
              <Button
                variant='danger'
                className='mx-1'
                onClick={() => handleDelete(index)}
              >
                Delete
              </Button>
            </div>
          </Card.Footer>
        </Card>
      ))}
    </Stack>
  )
}

TodoList.propTypes = {
  assignments: PropTypes.array.isRequired,
  setAssignments: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
}

export default TodoList
