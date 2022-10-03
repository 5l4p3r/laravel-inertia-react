import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Button, Dropdown, ListGroup, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

const Sidebar = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const data = usePage().props

    const logoutHandler = () => {
        Inertia.post('/logout')
    }

    return (
        <Navbar>
            <div className="container-fluid">
               <Button variant='default' className='navbar-brand' onClick={handleShow}><FontAwesomeIcon icon={faBars} /> isWant0</Button>                
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
            <Offcanvas.Title className='p-2'><h3>isWant0</h3></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <hr/>
                <div className='d-flex align-items flex-column mb-3 flex-wrap'>
                    <div className='mb-auto p-2'>
                        <Link href='/' className='navbar-brand'>HOME</Link>
                    </div>
                    
                    {data.auth.user !== null ?
                        <Dropdown>
                            <Dropdown.Toggle variant="default" id="dropdown-basic">
                                {data.auth.user.name}
                            </Dropdown.Toggle>
                    
                            <Dropdown.Menu>
                                <Link href='/profile' className='dropdown-item'>
                                    <img src="/images/user.png" alt="" className="img-thumbnail icon" /> Profile
                                </Link>
                                <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        :
                        <div className="p-2">
                            <Link href='/login' className='nav-link'>LOGIN</Link>
                            <Link href='/register' className='nav-link'>REGISTER</Link>
                        </div>
                    }
                </div>
            </Offcanvas.Body>
            </Offcanvas>
        </Navbar>
    )
}

export default Sidebar