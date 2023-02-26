import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct/AddProduct'
import EditProduct from './EditProduct/EditProduct'
import HomeStats from './Home/HomeStats'
import Orders from './Orders/Orders'
import Products from './Products/Products'
import Users from './Users/Users'

const AdminRoutes = () => {
    return (
        <Box p="20px 20px 20px 27px" py="20px" bg="#f5f5f5">
            <Routes>
                <Route path="/" element={<HomeStats />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<EditProduct />} />
                <Route path="/customers" element={<Users>Customers</Users>} />
                <Route path="/addproduct" element={<AddProduct />} />
            </Routes>
        </Box>
    )
}

export default AdminRoutes