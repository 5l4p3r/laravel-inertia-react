import { usePage } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import { Alert, Container } from 'react-bootstrap'
import MainLayout from '../components/MainLayout'

const Welcome = () => {
  return (
    <MainLayout>
      <Container>
        <h1>Welcome</h1>
        <Alert variant='danger'>Asuiii</Alert>
      </Container>
    </MainLayout>
  )
}

export default Welcome