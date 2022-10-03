import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from '@inertiajs/inertia-react'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import MainLayout from '../components/MainLayout'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const registerHandler = (e) => {
        e.preventDefault()

        const fdata = new FormData()
        fdata.append('name',name)
        fdata.append('email',email)
        fdata.append('password',password)
        fdata.append('password_confirmation',confirm)

        Inertia.post('/register',fdata)
    }

    const errors = usePage().props.errors

    return (
        <MainLayout>
            <Container className="d-flex justify-content-center">
                <Form onSubmit={registerHandler} style={{width:'400px'}} className="shadow p-3 mb-5 bg-body rounded">
                    <div className="text-center">
                        <h3>REGISTER</h3>
                    </div>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e)=>setName(e.target.value)}/><br/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={(e)=>setEmail(e.target.value)}/><br/>
                        {errors.email &&
                            <div className="alert alert-danger">{errors.email}</div>
                        }
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' onChange={(e)=>setPassword(e.target.value)}/><br/>
                        {errors.password &&
                            <div className="alert alert-danger">{errors.password}</div>
                        }
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' onChange={(e)=>setConfirm(e.target.value)}/><br/>
                    </Form.Group>
                    <Button type='submit' variant='secondary'>Register</Button>
                    <hr/>
                    <InputGroup>
                        <p className="mb-0">Already have account?</p> &nbsp;
                        <Link href='/login' className='nav-link text-primary'>Login</Link>
                    </InputGroup>
                </Form>
            </Container>
        </MainLayout>
    )
}

export default Register