import React from 'react'
import { Box, Image, Flex, Text, Icon } from "@chakra-ui/react"
import { AiOutlineSearch } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import { useSelector } from 'react-redux'
import Menubar from './MenuItem'
const Navbar = () => {
  const location = useLocation();

  if (location.pathname.includes("admin")) {
    return <></>
  }
  return (
    <div>
      <Box width="90%" margin="auto">
        <Flex alignItems={"center"} justifyContent="space-around">
          <Box>
            <Link to="/"><Image src="https://logos-world.net/wp-content/uploads/2020/10/Burberry-Logo.png" width="200px" height="100px"></Image></Link>
          </Box>
          <Flex gap="20px">
            <Text fontSize={"20px"} fontWeight="500">Gift</Text>
            <Text fontSize={"20px"} fontWeight="500">New in</Text>
            <Link to="/mens"><Text fontSize={"20px"} fontWeight="500">Mens</Text></Link>
            <Link to="/womens"><Text fontSize={"20px"} fontWeight="500">Women</Text></Link>
            <Link to="/kids"><Text fontSize={"20px"} fontWeight="500">Children</Text></Link>
            <Text fontSize={"20px"} fontWeight="500">Outwear</Text>
            <Text fontSize={"20px"} fontWeight="500">Bags</Text>
            <Text fontSize={"20px"} fontWeight="500">Stories</Text>
            <Text fontSize={"20px"} fontWeight="500">Values</Text>
          </Flex>
          <Flex gap="30px" alignItems={"center"}>
            <Icon as={AiOutlineSearch} fontSize={"20px"} fontWeight="500" />
            <Menubar />
          </Flex>
        </Flex>
      </Box>
    </div>
  )
}

export default Navbar
