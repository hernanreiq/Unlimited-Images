import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="success" expand="lg" variant="dark" className="shadow" id="navbar">
                    <Container>
                        <Navbar.Brand><NavLink to="/Unlimited-Images" className="border-none py-3 text-white font-weight-bold text-decoration-none" >Unlimited Images</NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <NavLink to="/Unlimited-Images/" activeClassName="active" className="text-white mx-3 text-decoration-none">Home</NavLink>
                                <NavLink to="/Unlimited-Images/images/1" activeClassName="active" className="text-white mx-3 text-decoration-none">Images</NavLink>
                                <NavLink to="/Unlimited-Images/videos/1" activeClassName="active" className="text-white mx-3 text-decoration-none">Videos</NavLink>
                                <NavLink to="/Unlimited-Images/about" activeClassName="active" className="text-white mx-3 text-decoration-none">About</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;