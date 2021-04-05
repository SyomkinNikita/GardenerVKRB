import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'


const Navibar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" varint="dark">
            {/* "Link" in brand component since just redirect is needed */}
            <Navbar.Brand as={Link} to='/'>WebDev Blog</Navbar.Brand>
            <Nav className="mr-auto">
                {/* "NavLink" here since "active" class styling is needed */}
                <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
                <Nav.Link as={NavLink} to='/users'>Users</Nav.Link>
                <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default Navibar;