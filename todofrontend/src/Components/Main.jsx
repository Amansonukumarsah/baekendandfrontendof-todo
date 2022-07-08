import React from 'react'
import Sidenav from './Sidenav'
import Post from './Post'
import Home from './Home'
import { Edit } from './Edit'
import { Routes,Route } from 'react-router-dom'
const Main = () => {
    return (
        <>
            <div className='bg-primary'>
                <Sidenav />
            </div>
            <div>
                <Routes>
                    <Route exact path='/' element={<Home/>}></Route>
                    <Route exact path='/post' element={<Post/>}></Route>
                    <Route exact path='/:id/' element={<Edit/>}></Route>
                </Routes>
            </div>
        </>
    )
}

export default Main
