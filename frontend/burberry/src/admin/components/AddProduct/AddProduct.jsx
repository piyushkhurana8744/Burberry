import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Box, Button, Flex, FormControl, FormLabel, Grid, HStack, Image, Input, Select, Textarea, VStack } from '@chakra-ui/react'
import { addProductApi } from '../Utils/database';

const AddProduct = () => {
  const [image,setImage] = useState("https://files.myglamm.com/site-images/800x800/GL1.jpg")
  const [name, setName] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [actualPrice, setActualPrice] = useState("");
  const [category, setCategory] = useState("Makeup");



  const publishProduct = async () => {
    if (name == "" || subtitle == "") {
      alert("All field required")
      return
    }
    const product = { name, image,subtitle, offerPrice: parseInt(actualPrice), actualPrice: parseInt(actualPrice) + 138, category }
    const res = addProductApi(product);
    console.log(res)
    alert("Product added")

  }

  return (
    <>
      <Helmet>
        <title>Add Product</title>
      </Helmet>
      <Flex p="20px" gap="20px" border="1px solid #e4e4e4" minHeight="85vh" bg="white">
        <Box w="35%">
          <Image src={image} alt="" border="1px solid #e4e4e4" />
          <Grid mt="15px" gap="15px" gridTemplateColumns="repeat(4,1fr)" gridTemplateRows="70px">
            <Box border="1px solid #e4e4e4">

            </Box>
            <Box border="1px solid #e4e4e4">

            </Box>
            <Box border="1px solid #e4e4e4">

            </Box>
            <Box border="1px solid #e4e4e4">

            </Box>
          </Grid>
        </Box>
        <VStack p="20px" spacing="20px" align="stretch" flex="1" border="1px solid #e4e4e4">
          <Flex gap="20px">
            <FormControl flex="3">
              <FormLabel>Title</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} borderRadius="0" />
            </FormControl>
            <FormControl flex="1">
              <FormLabel>Price</FormLabel>
              <Input type="number" value={actualPrice} onChange={(e) => setActualPrice(e.target.value)} borderRadius="0" />
            </FormControl>
          </Flex>
          <FormControl>
              <FormLabel>Image</FormLabel>
              <Input value={image} onChange={(e) => setImage(e.target.value)} borderRadius="0" />
            </FormControl>
          <Select value={category} onChange={(e) => setCategory(e.target.value)} borderRadius="0">
            <option value="Makeup">Makeup</option>
            <option value="Skin">Skin</option>
            <option value="haircare">Haircare</option>
          </Select>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea value={subtitle} onChange={(e) => setSubTitle(e.target.value)} minH="230px" borderRadius="0" />
          </FormControl>
          <HStack>
            {/* <Button>Save</Button> */}
            <Button onClick={publishProduct}>Publish</Button>
          </HStack>
        </VStack>
      </Flex>
    </>
  )
}

export default AddProduct