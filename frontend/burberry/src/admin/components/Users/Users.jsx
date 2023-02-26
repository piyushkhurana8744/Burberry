import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Box, Center, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import UserItem from './UserItem'
import Pagination from '../Pagination/Pagination'
import { getUsersApi } from '../Utils/database'

const Users = ({ children }) => {
  const [users, setUsers] = useState([]);

  // const userList = [{
  //   userId: 2,
  //   imgUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQqjb3NDO31flFdzXcCPIzzRK8-k-wtfIZUk5J-Wn3JJ5kQTUESHCvh3i1S4v8SGaKgyc19_a0mWMMEns84DLG_qtWNuhzF_kpHW-IJVAja&usqp=CAE",
  //   name: "Atul Singh",
  //   email: "atus2060@gmail.com",
  //   onlineStatus: true,

  // }, {
  //   userId: 3,
  //   imgUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTWCV1cd93D1cak92IP2Cv3EoypsLCJ8Mv-SR64TKfwpBxA_yRUc6oMFN4tr_J991tFLBl4RZPLTlw7e2mrZQ5xa--HiCjjQKtxC-p-CRg0yzfY-0L44hx2zY&usqp=CAE",
  //   name: "Atul Singh",
  //   email: "atus2060@gmail.com",
  //   onlineStatus: false,
  // },
  // {
  //   userId: 4,
  //   imgUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYm5ge6i5Dq-qofnnIMvOSRhrsYBsCemue5N57AfG04mm4GV5OQSxSgnSA5GbDj1J0zik1KAIhUzy8kkBJIeBaGHtmxIWriIaea8zmY9k&usqp=CAE",
  //   name: "Atul Singh",
  //   email: "atus2060@gmail.com",
  //   onlineStatus: true,

  // }, {
  //   userId: 6,
  //   imgUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfs0Wo3V6zlqa9IE4ATlwETRqJEG1zEBXB_SP_g_TAs68NZtbqGd2t_sXPk4rN78YkDlUveITDIVeQ08rr4AxKJTQtRoFfmAdJW7XXaUGv&usqp=CAE",
  //   name: "Atul Singh",
  //   email: "atus2060@gmail.com",
  //   onlineStatus: true,
  // },
  // {
  //   userId: 11,
  //   imgUrl: "https://www.ikea.com/in/en/images/products/bjoerkasen-laptop-stand-beige__0964125_pe808907_s5.jpg?f=s",
  //   name: "Atul Singh",
  //   email: "atus2060@gmail.com",
  //   onlineStatus: false,
  // },
  // {
  //   userId: 6,
  //   imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA7rft6vnx_dzW7dOOW-JRQej1JqNXRUYYIsG1KqmWEhhr9eeYfh5H_M8hcxtjfkibpyo&usqp=CAU",
  //   name: "Atul Singh",
  //   email: "atus2060@gmail.com",
  //   onlineStatus: true,
  // }]

  const getUsers = async () => {
    const data = await getUsersApi()
    console.log("users",data)
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <Helmet>
        <title>{children}</title>
      </Helmet>
      <Box p="20px" border="1px solid #e4e4e4" minHeight="85vh" bg="white">
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Profile</Th>
              <Th>Name</Th>
              <Th>UserId</Th>
              <Th>Email</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              users.map((item, index) => {
                return <UserItem key={index} name={item.username} id={item.id} index={index + 1} {...item} />
              })
            }
          </Tbody>
        </Table>
        <Center mt="20px">
          <Pagination />
        </Center>
      </Box>
    </>
  )
}

export default Users