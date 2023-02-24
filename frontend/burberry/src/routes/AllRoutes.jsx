import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/homepage'
import MensPage from '../pages/mensPage'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/mens' element={<MensPage />} />
        </Routes>
    )
}

export default AllRoutes