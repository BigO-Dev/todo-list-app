import PropTypes from 'prop-types'
import { Stack, Card, Button } from 'react-bootstrap'

const HomeWorkList = ({ assignments, setAssignments, handleEdit }) => {
  const handleDelete = (index) => {
    setAssignments((prevTask) => {
      return prevTask.filter((task, i) => i !== index)
    })
  }

  const createdDate = new Intl.DateTimeFormat('en-US').format()

  return (
    <Stack className='my-5' gap={3}>
      {assignments.map((assignment, index) => (
        <Card key={index} className='p-3'>
          <Card.Title>
            <h3>{assignment.task}</h3>
          </Card.Title>
          <Card.Text>{assignment.notes}</Card.Text>
          <Card.Footer>
            <small className='text-muted'>Created on: {createdDate}</small>
            <br />
            <small className='text-muted'>
              Due by:{' '}
              {assignment.dueDate && !isNaN(Date.parse(assignment.dueDate))
                ? new Intl.DateTimeFormat('en-US').format(
                    new Date(assignment.dueDate)
                  )
                : 'Invalid date'}
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

HomeWorkList.propTypes = {
  assignments: PropTypes.array.isRequired,
  setAssignments: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
}

export default HomeWorkList
