import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherPointed,faHome,faUser, faSign, faKey, faArrowRightFromBracket, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
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
        <Navbar className='shadow-sm p-3 mb-5 bg-white rounded'>
            <div className="container-fluid">
                <Button variant='default' onClick={handleShow}>
                    {data.auth.user !== null ?
                        <>
                            <img src={`/images/${data.auth.user.photo}`} alt="photo" className="icon" /> {data.auth.user.name}
                        </>
                        :
                        <><img src={`/images/user.png`} alt="photo" className="icon" /> isWantO</>
                    }
                </Button>                
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header>
            <Offcanvas.Title className='p-2'>
                {data.auth.user !== null ?
                    <Link href='/profile' className='navbar-brand'>
                        <img src={`/images/${data.auth.user.photo}`} alt="photo" className="icon" /> {data.auth.user.name}
                    </Link>
                    :
                    <p>isWantO</p>
                }
            </Offcanvas.Title>
            </Offcanvas.Header>
            <hr/>
            <Offcanvas.Body className='text-center'>
                <Link href='/' className='nav-link py-4'>
                    <FontAwesomeIcon icon={faHome}/> Home
                </Link>
                {data.auth.user !== null ? 
                    <p className="nav-link py-12" onClick={logoutHandler}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket}/> Logout
                    </p>
                    :
                    <>
                        <Link href='/login' className='nav-link py-2'>
                            <FontAwesomeIcon icon={faKey}/> LOGIN
                        </Link>
                        <Link href='/register' className='nav-link py-2'>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft}/> REGISTER
                        </Link>
                    </>
                }
            </Offcanvas.Body>
            </Offcanvas>
        </Navbar>
    )
}

export default Sidebar