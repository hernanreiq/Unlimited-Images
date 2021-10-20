import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="success" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand><NavLink to="/" className="text-white font-weight-bold text-decoration-none" >Unlimited Images</NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <NavLink to="/home" className="text-white mx-1 font-weight-bold">Home</NavLink>
                                <NavLink to="/images" className="text-white mx-1 font-weight-bold">Images</NavLink>
                                <NavLink to="/videos" className="text-white mx-1 font-weight-bold">Videos</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;