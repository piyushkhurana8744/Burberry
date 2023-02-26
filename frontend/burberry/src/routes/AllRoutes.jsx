import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../admin/components/Home/Home'
import Homepage from '../pages/homepage'
import MensPage from '../pages/mensPage'
import SignIn from '../pages/signup'
import LoginPage from '../pages/login'
import WomenPage from '../pages/womenPage'
import SingleProductPage from '../pages/singleProductPage'
import KidsPage from '../pages/kidsPage'
import CartPage from '../pages/cartPage'
import Checkout from '../pages/checkoutPage'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/mens' element={<MensPage />} />
            <Route path='/womens' element={<WomenPage />} />
            <Route path='/kids' element={<KidsPage />} />
            <Route path='/products/:id' element={<SingleProductPage />} />
            <Route path="/admin" element={<AdminHome />}></Route>
            <Route path="/signup" element={<SignIn />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/cartpage" element={<CartPage />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
    )
}

export default AllRoutes