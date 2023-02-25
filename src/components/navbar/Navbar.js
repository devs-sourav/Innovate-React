import React from 'react'
import BtnTag from '../layouts/BtnTag'
import NavListItem from '../layouts/NavListItem'
import "./navbar.css"


const Navbar = () => {
  return (
    <nav id="navbar">
        <div className="container">
            <div className="nav_wrap">
                <div className="logo">
                    <img src="images/Logo.png" alt="Logo.png"/>
                </div>
                <ul className="menu">
                    <NavListItem title="Home"/>
                    <NavListItem title="About"/>
                    <NavListItem title="Service"/>
                    <NavListItem title="Portfolio"/>
                    <NavListItem title="Price"/>
                    <NavListItem title="Blog"/>
                </ul>
                <div className="btn">
                    <BtnTag name="Contact us" />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar