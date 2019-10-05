import React from 'react'
import { NavLink } from 'react-router-dom'

const SignInLinks = () => {
    return (
        <ul className='right'>
            <li> <NavLink to='/create'>New Lecture </NavLink> </li>
            <li> <NavLink to='/'> LogOut </NavLink> </li>
            <li> <NavLink to='/' className='btn btn-floating pink lighten-1' > AK </NavLink> </li>
            
            
        </ul>
    )
}

export default SignInLinks