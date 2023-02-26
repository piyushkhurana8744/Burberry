import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHomePage from '../admin/components/Home/AdminHomePage'
import Homepage from '../pages/homepage'
import MensPage from '../pages/mensPage'
import SignIn from '../pages/signup'
import LoginPage from '../pages/login'
import WomenPage from '../pages/womenPage'
import SingleProductPage from '../pages/singleProductPage'
import KidsPage from '../pages/kidsPage'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/mens' element={<MensPage />} />
            <Route path='/womens' element={<WomenPage />} />
            <Route path='/kids' element={<KidsPage />} />
            <Route path='/products/:id' element={<SingleProductPage />} />
            <Route path="/admin/*" element={<AdminHomePage />}></Route>
            <Route path="/signup" element={<SignIn />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
    )
}

export default AllRoutes