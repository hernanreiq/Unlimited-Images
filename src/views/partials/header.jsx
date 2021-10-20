import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="success" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand><NavLink to="/" className="border-none py-3 text-white font-weight-bold text-decoration-none" >Unlimited Images</NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <NavLink to="/home" activeClassName="active" className="text-white mx-3 text-decoration-none">Home</NavLink>
                                <NavLink to="/images" activeClassName="active" className="text-white mx-3 text-decoration-none">Images</NavLink>
                                <NavLink to="/videos" activeClassName="active" className="text-white mx-3 text-decoration-none">Videos</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;