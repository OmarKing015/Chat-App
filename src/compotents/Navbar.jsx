/* eslint-disable no-unused-vars */

import React from 'react'
import pic from "./pic.jpg"
function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">PR Chat</span>
      <div className="user">
        <img src={pic} alt="" />
        <span>Omar</span>
        <button>Logout</button>
      </div>
    </div>

  )
}

export default Navbar