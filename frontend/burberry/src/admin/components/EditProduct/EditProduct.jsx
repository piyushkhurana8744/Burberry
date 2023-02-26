import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Box, Button, Flex, FormControl, FormLabel, Grid, HStack, Image, Input, Select, Textarea, useToast, VStack } from '@chakra-ui/react'
import { deleteProductApi, updateProductApi } from '../Utils/database';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
    const { id } = useParams()
    const [image, setImage] = useState("https://assets.burberry.com/is/image/Burberryltd/7D3E2F24-04F9-4837-8CF8-2DDE40B0BA52?$BBY_V2_ML_1x1$&wid=1251&hei=1251")
    const [images, setImages] = useState(["", "", "", ""]);
    const [name, setName] = useState("");
    const [subtitle, setSubTitle] = useState("");
    const [actualPrice, setActualPrice] = useState("");
    const [category, setCategory] = useState("Mens");
    const [productCategory, setProductCategory] = useState("Jacket");
    const toast = useToast()

    const changeImages = (index) => {
        const url = window.prompt("Image url")
        setImages((prev) => {
            return prev.map((item, idx) => idx === index ? url : item)
        })
    }

    const deleteProduct = async () => {
        try {
            await deleteProductApi(id)
            toast({
                title: "Product deleted",
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: "top"
            })
        } catch (error) {
            toast({
                title: "Can't delete Product",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: "top"
            })
        }
    }
    const updateProduct = async () => {

        if (name === "" || actualPrice === "") {
            toast({
                title: 'All field requireds.',
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: "top"
            })
            return
        }
        const product = { product_title: name, product_img: image, product_price: parseInt(actualPrice), product_category: productCategory, category, quantity: 1 }

        try {
            const res = await updateProductApi(id, product);
            toast({
                title: "Product updated",
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: "top"
            })
        } catch (error) {
            toast({
                title: 'Can not update Product',
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: "top"
            })
        }


    }
    const getProduct = async () => {
        const { data } = await axios.get(`http://localhost:8080/products/${id}`);
        setImage(data.product_img)
        setName(data.product_title);
        setActualPrice(data.product_price);
        setCategory(data.category);
        setProductCategory(data.product_category);

    }

    useEffect(() => {
        getProduct()
    }, [id])

    return (
        <>
            <Helmet>
                <title>Edit Product</title>
            </Helmet>
            <Flex p="20px" gap="20px" border="1px solid #e4e4e4" minHeight="85vh" bg="white">
                <Box w="35%">
                    <Image src={image} maxH="430px" width="100%" alt="" border="1px solid #e4e4e4" />
                    <Grid mt="15px" gap="15px" gridTemplateColumns="repeat(4,1fr)" gridTemplateRows="80px">
                        <Box border="1px solid #e4e4e4" onClick={() => changeImages(0)} cursor="pointer">
                            {images[0] != "" && <Image src={images[0]} h="100%" w="100%" alt="" border="1px solid #e4e4e4" />}
                        </Box>
                        <Box border="1px solid #e4e4e4" onClick={() => changeImages(1)} cursor="pointer">
                            {images[1] != "" && <Image src={images[1]} h="100%" w="100%" alt="" border="1px solid #e4e4e4" />}
                        </Box>
                        <Box border="1px solid #e4e4e4" onClick={() => changeImages(2)} cursor="pointer">
                            {images[2] != "" && <Image src={images[2]} h="100%" w="100%" alt="" border="1px solid #e4e4e4" />}
                        </Box>
                        <Box border="1px solid #e4e4e4" onClick={() => changeImages(3)} cursor="pointer">
                            {images[3] != "" && <Image src={images[3]} h="100%" w="100%" alt="" border="1px solid #e4e4e4" />}
                        </Box>
                    </Grid>
                    <Button width="100%" mt="20px" colorScheme="red" onClick={deleteProduct}>Delete</Button>
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
                    <FormControl>
                        <FormLabel>Category</FormLabel>
                        <Select value={category} onChange={(e) => setCategory(e.target.value)} borderRadius="0">
                            <option value="Mens">Mens</option>
                            <option value="Womens">Womens</option>
                            <option value="Children">Kids</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Product Category</FormLabel>
                        <Select value={productCategory} onChange={(e) => setProductCategory(e.target.value)} borderRadius="0">
                            <option value="Jacket">Jacket</option>
                            <option value="Bag">Bag</option>
                            <option value="tshirt">T shirt</option>
                        </Select>
                    </FormControl>
                    {/* <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea value={subtitle} onChange={(e) => setSubTitle(e.target.value)} minH="230px" borderRadius="0" />
          </FormControl> */}
                    <HStack>
                        {/* <Button>Save</Button> */}
                        <Button onClick={updateProduct}>Update</Button>
                    </HStack>
                </VStack>
            </Flex>
        </>
    )
}

export default EditProduct