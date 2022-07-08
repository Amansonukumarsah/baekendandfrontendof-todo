import React from 'react'
import { NavLink } from 'react-router-dom';
const Sidenav = () => {
    return (
        <>
            <div className='d-flex'>
                <NavLink to='/' >
                    <ul>
                        <li className='text-white' style={{listStyleType:'none'}}>
                            Home
                        </li>
                    </ul>
                </NavLink>

                <NavLink to='/post'>
                    <ul>
                        <li className='text-white' style={{listStyleType:'none'}}>
                            Post
                        </li>
                    </ul>
                </NavLink>
            </div>
        </>
    )
}

export default Sidenav