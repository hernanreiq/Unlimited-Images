import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="success" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="/" className="text-white font-weight-bold" >Unlimited Images</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/home" className="text-white font-weight-bold">Home</Nav.Link>
                                <Nav.Link href="/images" className="text-white font-weight-bold">Images</Nav.Link>
                                <Nav.Link href="/videos" className="text-white font-weight-bold">Videos</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;