import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct/AddProduct'
import Home from './Home/Home'
import Orders from './Orders/Orders'
import Products from './Products/Products'
import Users from './Users/Users'

const AllRoutes = () => {
    return (
        <Box p="20px 20px 20px 27px" py="20px" bg="#f5f5f5">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/orders" element={<Orders />} />
            </Routes>
            <Routes>
                <Route path="/products" element={<Products />} />
            </Routes>
            <Routes>
                <Route path="/customers" element={<Users>Customers</Users>} />
            </Routes>
            <Routes>
                <Route path="/addproduct" element={<AddProduct />} />
            </Routes>
        </Box>
    )
}

export default AllRoutes