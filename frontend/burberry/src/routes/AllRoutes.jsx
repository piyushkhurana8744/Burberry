import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../admin/components/Home/Home'
import Homepage from '../pages/homepage'
import MensPage from '../pages/mensPage'
import SignIn from '../pages/signup'
import LoginPage from '../pages/login'
import WomenPage from '../pages/womenPage'
import SingleProductPage from '../pages/singleProductPage'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/mens' element={<MensPage />} />
            <Route path='/womens' element={<WomenPage />} />
            <Route path='/products/:id' element={<SingleProductPage />} />
            <Route path="/admin" element={<AdminHome />}></Route>
            <Route path="/signup" element={<SignIn />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
    )
}

export default AllRoutes