import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/spark-low-resolution-logo-color-on-transparent-background.png';

export default function NavBar(){
    return (
        <>
          <Navbar defaultExpanded expand="lg" bg="dark" variant="dark" >
            <Container>
            <Navbar.Brand href="../">
            <img
              alt=""
              src={logo}
              width="70em"
              height="35em"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
              <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-auto text-right">
                        <Nav.Link href="../new">New User</Nav.Link>
                        <Nav.Link href="#pricing">Edit</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}