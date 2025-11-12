import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Write from './Pages/Write'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Signup from './Pages/SignUp'

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='write' element={<Write />} />
                <Route path='signin' element={<SignIn />} />
                 <Route path='signup' element={<Signup />} />
            </Route>
        </Routes>
    )
}

export default App
