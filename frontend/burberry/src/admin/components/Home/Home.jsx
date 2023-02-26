import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Box, Flex, Grid, VStack } from '@chakra-ui/react'
import { FiTruck, FiUsers } from 'react-icons/fi'
import { BsCashCoin } from 'react-icons/bs'
import Orders from '../Orders/Orders'
import StatsCard from './StatsCard'
import { getStatsApi } from '../Utils/database'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
  const [data, setData] = useState({ pending: "0", delivered: "0", profit: "0" })

  const statsData = [
    {
      id: 1,
      count: data.pending,
      title: "Pending Orders",
      icon: <FiTruck />
    },
    {
      id: 2,
      count: data.delivered,
      title: "Delivered Orders",
      icon: <FiTruck />
    },
    {
      id: 3,
      count: "₹ " + data.profit,
      title: "Total Profit",
      icon: <BsCashCoin />
    }
  ]

  const getStats = async () => {
    const stats = await getStatsApi();
    setData(stats)
  }
  useEffect(() => {
    getStats()
  }, [])

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Navbar />

      <Flex>
        <Box w="15%" position="relative"  transition="1s ease" overflow="hidden" border="1px solid #e4e4e4" minHeight="100vh">
          <Sidebar />
        </Box>
        <Box flex="1" minHeight="100vh">
          <Box minHeight="89vh">
          <VStack spacing="20px" align="stretch" p="20px" border="1px solid #e4e4e4" minHeight="85vh" bg="white">
          <Grid gap="20px" gridTemplateColumns="repeat(3,1fr)" gridTemplateRows="180px">
            {
              statsData.map((stat) => {
                return <StatsCard key={stat.id} {...stat} />
              })
            }
          </Grid>
          {/* <Grid gap="20px" gridTemplateColumns="repeat(2,1fr)" gridTemplateRows="200px">
          <Box border="1px solid #e4e4e4">

          </Box>
          <Box border="1px solid #e4e4e4">

          </Box>
        </Grid> */}
          <Orders />
        </VStack>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default Home