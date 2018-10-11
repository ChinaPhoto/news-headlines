import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () =>{
   return (
    <div>
        <div>
            <NavLink exact to='/'></NavLink>
            <NavLink  to='/one'></NavLink>
            <NavLink  to='/two'></NavLink>
        </div>
    </div>
   )
}

export default NavBar