import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Container, Form, Modal } from 'react-bootstrap'
import MainLayout from '../components/MainLayout'

const Profile = () => {
    const user = usePage().props.auth.user
    const [bphoto, setBphoto] = useState(false)
    const [file, setFile] = useState(null)

    const changePhoto = () => {
        const fdata = new FormData()
        fdata.append('file',file)
        fdata.append('oldfile',user.photo)
        Inertia.post('/change_photo',fdata)
        
        Inertia.reload({only:[user]})
    }
    return (
        <MainLayout>
            <Container>
                <img src={`/images/${user.photo}`} alt="" className="img-thumbnail photo" />
                <Button variant='default' onClick={()=>{setBphoto(true)}}>
                    <FontAwesomeIcon icon={faCamera}/>
                </Button>
                <Modal show={bphoto} onHide={()=>{setBphoto(!bphoto)}}>
                    <Modal.Header closeButton>
                        <Modal.Title>Change Photo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={changePhoto}>
                            <Form.Group>
                                <Form.Label>File</Form.Label>
                                <Form.Control type='file' accept='image/*' onChange={(e)=>setFile(e.target.files[0])}/>
                            </Form.Group><br/>
                            <Button variant='secondary' type='submit'>Change Photo</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
                <div className="mb-3 p-2">
                    <h3>{user.name}</h3>
                </div>
            </Container>
        </MainLayout>
    )
}

export default Profile