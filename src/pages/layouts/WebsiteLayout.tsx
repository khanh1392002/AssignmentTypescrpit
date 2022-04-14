
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <Header></Header>
        <main>
            <Outlet />
            
        </main>
        <Footer></Footer>
    </div>
    
  )
}

export default WebsiteLayout