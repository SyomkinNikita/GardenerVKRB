import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import {
    Link
} from "react-router-dom";


const Navibar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" varint="dark">
                <Navbar.Brand>WebDev Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Users</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};

export default Navibar;