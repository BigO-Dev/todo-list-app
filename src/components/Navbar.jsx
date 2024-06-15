import { Navbar, Container, Nav } from 'react-bootstrap'

const Navmenu = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>School Hub</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#homework'>Homework</Nav.Link>
          <Nav.Link href='#grades'>Grades</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navmenu
