import {
    Navbar,
    Nav,
    Container,
} from "react-bootstrap/";

export default function NavBar() {
    return (
        <Navbar fixed="top" bg="light" expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="#home">NavBar</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/*<Nav.Link href="/about">About</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}