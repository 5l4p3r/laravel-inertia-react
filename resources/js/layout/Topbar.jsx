import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'

const Topbar = () => {
  return (
    <Navbar expand="lg" className="shadow-sm p-3 mb-5 bg-body rounded">
        <Container>
            <NavbarBrand href='/'>is Want O</NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link href="/profile" className="nav-link">Profile</Link>
                </Nav>
                <Nav className="ms-auto">
                    <Link href="/login" className="nav-link">Login</Link>
                    <Link href="/register" className="nav-link">Register</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Topbar