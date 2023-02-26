import React from 'react'
import { Avatar, Badge, Td, Tr, IconButton, ButtonGroup, VStack ,Text} from '@chakra-ui/react'
import { FiCheck, FiEdit, FiX } from "react-icons/fi"

const UserItem = ({ imgUrl,userId,name, email,onlineStatus}) => {
  return (
    <Tr p="10px" border="1px solid #e4e4e4">
      <Td>
        <Avatar src={imgUrl} alt="product image" width="55px" height="50px" />
      </Td>
      <Td>
        <VStack align="start">
          <Text>{name}</Text>
          <Text fontSize='13px'>atuls2060</Text>
        </VStack>
      </Td>
      <Td>{userId}</Td>
      <Td>{email}</Td>
      <Td>
        <Badge colorScheme={onlineStatus ? "green" : "red"}>{onlineStatus ? "Online" : "Offline"}</Badge>
      </Td>
      <Td>
        <ButtonGroup>
          <IconButton>
            <FiEdit />
          </IconButton>
          <IconButton>
            <FiCheck />
          </IconButton>
          <IconButton>
            <FiX />
          </IconButton>
        </ButtonGroup>
      </Td>
    </Tr>
  )
}

export default UserItem