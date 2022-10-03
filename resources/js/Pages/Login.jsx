import React, { useEffect, useState } from 'react'
import MainLayout from '../components/MainLayout'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = (e) => {
        e.preventDefault()

        const fdata = new FormData()
        fdata.append('email',email)
        fdata.append('password',password)

        Inertia.post('/login',fdata)
    }

    const errors = usePage().props.errors

    return (
        <MainLayout>
            <Container className="d-flex justify-content-center">
                <Form onSubmit={loginHandler} style={{width:'400px'}} className="shadow p-3 mb-5 bg-body rounded">
                    <div className="text-center">
                        <h3>LOGIN</h3>
                    </div>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={(e)=>setEmail(e.target.value)}/><br/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' onChange={(e)=>setPassword(e.target.value)}/><br/>
                    </Form.Group>
                    <Button type='submit' variant='secondary'>Login</Button>
                    <hr/>
                    {errors.email &&
                        <div className="alert alert-danger">{errors.email}</div>
                    }
                    <InputGroup>
                        <p className="mb-0">Do not have account?</p> &nbsp;
                        <Link href='/register' className='nav-link text-primary'>Register</Link>
                    </InputGroup>
                </Form>
            </Container>
        </MainLayout>
    )
}

export default Login