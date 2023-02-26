import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Box, Center, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import OrderItem from './OrderItem'
import Pagination from '../Pagination/Pagination'
import { getOrders } from '../Utils/database'

const Orders = () => {

  const [orderList,setOrderList] = useState([])  
  const getOrder = async()=>{
      try{
          const data = await getOrders()
          setOrderList(data)
      }catch(err){

      }
  }

   useEffect(()=>{
      getOrder()
   },[])

  return (
    <>
      <Helmet>
        <title>Orders</title>
      </Helmet>
      <Box p="20px" border="1px solid #e4e4e4" minHeight="85vh" bg="white">
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>OrderId.</Th>
              <Th>UserId</Th>
              <Th>ProductId</Th>
              <Th>Price</Th>
              <Th>Qty</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              orderList.map((order, index) => {
                return <OrderItem id={order.id} index={index + 1} {...order} />
              })
            }
          </Tbody>
        </Table>
        <Center mt="20px">
        <Pagination/>
        </Center>
      </Box>
    </>
  )
}

export default Orders