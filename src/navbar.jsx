import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/login">Contato</Nav.Link>
              <Nav.Link href="/sobre">Sobre</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    
      </>
    );
  }
  
  export default ColorSchemesExample;