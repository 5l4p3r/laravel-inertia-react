import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import Sidebar from '../layout/Sidebar'

const MainLayout = ({header,children}) => {
  return (
    <div>
        <Head title="is Want O"/>
        <Sidebar/>
        {header}
        <div className="py-4">
            {children}
        </div>
    </div>
  )
}

export default MainLayout