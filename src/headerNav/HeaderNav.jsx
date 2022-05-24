import React from "react"
import { NavLink } from 'react-router-dom'
import logo from './../img/logo.png'


export const HeaderNav = () => {

    return (
            <nav className='nav'>
                <div className="nav_wrap">
                    <div className="nav__links-wrap">
                        <NavLink to='/' className="nav__logo-link nav_link"><img className="nav__logo-pic" src={logo} /></NavLink>
                        <NavLink to='/home' className="nav_link">Home</NavLink>
                        <NavLink to='/characters' className="nav_link">All Characters</NavLink>
                        <NavLink to='/houses' className="nav_link">Houses</NavLink>
                        <NavLink to='/fav' className="nav_link">Favourite</NavLink>
                    </div>
                    <div className="nav__hat-wrap">
                        <NavLink to='/hat' className="nav_link">Sorting Hat</NavLink>
                    </div>
                </div>
            </nav>
    )
}
