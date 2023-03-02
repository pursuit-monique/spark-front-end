import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/spark-low-resolution-logo-color-on-transparent-background.png';

export default function Footer(){
    return (
        <>
          <Navbar className="mt-5" defaultExpanded expand="lg" bg="dark" variant="dark" >
            <Container>
              <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-auto text-right">
                    </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}