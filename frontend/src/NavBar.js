import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="dark" variant="dark" expand='lg'>
                <Container>
                    <Nav>
                        <Nav.Link as={Link} to="/dashboard" > Dashboard </Nav.Link>
                        <Nav.Link as={Link} to="/upload" > Upload Resume </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;


