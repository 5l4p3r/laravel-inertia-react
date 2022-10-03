import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { Alert, Container } from 'react-bootstrap'
import MainLayout from '../components/MainLayout'

const Profile = () => {
    const user = usePage().props.auth.user
    return (
        <MainLayout>
            <Container>
                <img src={`/images/user.png`} alt="" className="img-thumbnail photo" />
                <div className="mb-3 p-2">
                    <h3>{user.name}</h3>
                </div>
            </Container>
        </MainLayout>
    )
}

export default Profile