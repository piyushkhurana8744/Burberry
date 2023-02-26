import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Box, Flex, Heading, InputGroup, Input, InputLeftAddon, InputRightAddon, Select, HStack, Text, VStack, Avatar } from '@chakra-ui/react'
import { FiChevronDown, FiSearch } from 'react-icons/fi'

const Navbar = () => {
  const [title, setTitle] = useState("")

  return (
    <>
      <Helmet onChangeClientState={(newState) => setTitle(newState.title)} />
      <Flex p="20px 20px 20px 30px" borderBottom="1px solid #e4e4e4" justifyContent="space-between" alignItems="center" w="100%" height="10vh">
        <Box>
          <Heading minW="184px" size="lg" fontFamily="monospace" >
            {
              title
            }
          </Heading>
        </Box>
        <Box w="50%">
          <InputGroup>
            <InputLeftAddon p="0" py="6">
              <Select border="none" focusBorderColor="transparent" cursor="pointer">
                <option value='option1'>Products</option>
                <option value='option2'>Orders</option>
                <option value='option3'>Customers</option>
              </Select>
            </InputLeftAddon>
            <Input py="6" placeholder='Search Products, Orders, Customers...' focusBorderColor='#dbae52' />
            <InputRightAddon py="6" cursor="pointer">
              <FiSearch />
            </InputRightAddon>
          </InputGroup>
        </Box>
        <Box>
          <HStack p="2" spacing="3" border="1px solid #e4e4e4" >
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size="sm" />
            <VStack align="start" spacing="0">
              <Text fontSize="14px">
                Atul Singh
              </Text>
              <Text fontSize="10px">
                Admin
              </Text>
            </VStack>
            <FiChevronDown />
          </HStack>
        </Box>
      </Flex>
    </>
  )
}

export default Navbar