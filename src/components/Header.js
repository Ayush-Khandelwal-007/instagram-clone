import React from 'react'
import Sidebar from './HeaderComponents/Sidebar'
import './HeaderComponents/Header.css'

function Header() {
  return (
    <div className="app_header">
      <img
        className="app_headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="" />
      <Sidebar/>
    </div>
  )
}

export default Header
