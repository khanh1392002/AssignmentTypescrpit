
import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './../admin/Dashboard';

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
       <Dashboard></Dashboard>
        <main >
            <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout