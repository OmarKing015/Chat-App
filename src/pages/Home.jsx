import React from 'react'
import { Sidebar } from '../compotents/Sidebar'
import { Chat } from '../compotents/Chat'

function Home() {
  return (
    <>
    <div className='home'><div className='container'>
        <Sidebar/>
        <Chat/>
    </div></div>
    
    </>
  )
}

export default Home