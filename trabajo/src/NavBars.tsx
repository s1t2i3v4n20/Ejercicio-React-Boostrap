import { Container, Nav, Navbar } from "react-bootstrap";

const NavBars:React.FC=()=>{
    return(

    <Navbar expand="lg" variant="dark" className="bg-primary">
<Container>
    <Navbar.Brand>Inicio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
        <Nav className="me-auto">
            <Nav.Link>Proyectos</Nav.Link>
            <Nav.Link>Contactos</Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Container>
    </Navbar>

    );
};

export default NavBars;