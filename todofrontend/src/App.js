import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './Components/Main'

import { BrowserRouter  } from 'react-router-dom'; 
 const App = () => {
  return (
    <>
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
    </>
  )
}

export default App