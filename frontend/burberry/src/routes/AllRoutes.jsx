import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/homepage'
import MensPage from '../pages/mensPage'
import SignIn from '../pages/signup'
import LoginPage from '../pages/login'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/mens' element={<MensPage />} />
            <Route path="/signup" element={<SignIn />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
    )
}

export default AllRoutes