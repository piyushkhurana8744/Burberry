import React, { useEffect, useState } from 'react'
import { Box, Flex, Grid, Image, Text,Modal,ModalOverlay,ModalContent,ModalBody,ModalCloseButton, Link, useDisclosure } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import axios from 'axios';
import styles from "./singleProductPage.module.css"
import {RiStore3Fill} from "react-icons/ri"
import {BsFillCalendarCheckFill} from "react-icons/bs"

const SingleProductPage = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {id} = useParams();
    const [product, setProduct] = useState({})

    const getProduct = async () => {
        const {data} = await axios.get(`http://localhost:8080/products/${id}`);
        setProduct(data)
    }

    useEffect(() => {
        getProduct()
    }, [id])
    return(
        <div>
        <Box backgroundColor={"white"} marginBottom="36px">
            <Grid templateColumns={"repeat(2,1fr)"} gap="4px">
                <Box>
                    <Image src={product.product_img} w="100%"></Image>
                </Box>
                <Box paddingLeft={"8%"}>
                    <Text color={"#333"} align={"left"} cursor={"pointer"} w="40%" py={"30px"}>Women |  New Arrivals  |  New In</Text>
                    <Text color={"black"} align={"left"} fontWeight="500" paddingBottom={"24px"}>{product.product_title}</Text>
                    <Text color={"#333"} align={"left"} fontSize="14px" fontWeight={"400"} paddingBottom="8px">${product.product_price}</Text>
                    <Text align={"left"} color={"#666666"} fontSize="12px" paddingBottom={"16px"}>Instalment payments available</Text>
                    <hr/>
                    <Flex alignItems={"center"} gap="8px">
                    <Text fontWeight={"500"} align={"left"} fontSize="14px" py={"16px"}>COLOUR:</Text>
                    <Text fontSize={"14px"} color="#333" fontWeight={"400"} py={"16px"}>Soft Fawn</Text>
                    </Flex>
                    <hr/>
                    <Flex alignItems={"center"} gap="8px">
                    <Text fontWeight={"500"} align={"left"} fontSize="14px" py={"16px"}>SIZE (US):</Text>
                    <Text fontSize={"14px"} color="#333" fontWeight={"400"} py={"16px"}>Size Chart</Text>
                    </Flex>
                    <Flex alignItems={"center"} color={"black"} py={"16px"}>
                    <Text padding="10px" margin={"0 8px 8px 0"} minWidth="64px"  fontWeight={"400"} align={"center"} fontSize="14px" lineHeight={"20px"} _hover={{border:"1px solid black"}}>0</Text>
                    <Text _hover={{border:"1px solid black"}} padding="10px" margin={"0 8px 8px 0"} minWidth="64px"  fontWeight={"400"} align={"center"} fontSize="14px" lineHeight={"20px"}>02</Text>
                    <Text _hover={{border:"1px solid black"}} padding="10px" margin={"0 8px 8px 0"} minWidth="64px"  fontWeight={"400"} align={"center"} fontSize="14px" lineHeight={"20px"}>04</Text>
                    <Text _hover={{border:"1px solid black"}} padding="10px" margin={"0 8px 8px 0"} minWidth="64px"  fontWeight={"400"} align={"center"} fontSize="14px" lineHeight={"20px"}>06</Text>
                    <Text _hover={{border:"1px solid black"}} padding="10px" margin={"0 8px 8px 0"} minWidth="64px"  fontWeight={"400"} align={"center"} fontSize="14px" lineHeight={"20px"}>08</Text>
                    <Text _hover={{border:"1px solid black"}} padding="10px" margin={"0 8px 8px 0"} minWidth="64px"  fontWeight={"400"} align={"center"} fontSize="14px" lineHeight={"20px"}>10</Text>
                    <Text _hover={{border:"1px solid black"}} padding="10px" margin={"0 8px 8px 0"} minWidth="64px"  fontWeight={"400"} align={"center"} fontSize="14px" lineHeight={"20px"}>12</Text>
                    <Text _hover={{border:"1px solid black"}} padding="10px" margin={"0 8px 8px 0"} minWidth="64px"  fontWeight={"400"} align={"center"} fontSize="14px" lineHeight={"20px"}>14</Text>
                    </Flex>
                    <hr/>
                    <Text align={"left"} py={"16px"}>Free Shipping and Returns 
                        <Link onClick={onOpen}> 
                        More Details
                            <Modal isOpen={isOpen} onClose={onClose} border={"5px solid blue"}>
                            <ModalOverlay />
                            <ModalContent minWidth={"50vh"} minHeight="80vh">
                                <ModalCloseButton />
                                <ModalBody >
                                <Text paddingBottom={"20px"} pt="10px" fontSize="14px" fontWeight="500" letterSpacing="0" lineHeight="20px" textTransform="uppercase" color="#000" margin="0 40px 0 0">
                                        DELIVERY DETAILS
                                </Text>
                                <Box>
                                <Text fontSize="14px" fontWeight="500" letterSpacing="0" lineHeight="20px" color="#000" margin="0 40px 0 0">Next day delivery</Text>
                                    <Text color="#333" paddingBottom={"30px"}>Place your order today and receive it tomorrow</Text>
                                <Text fontSize="14px" fontWeight="500" letterSpacing="0" lineHeight="20px" color="#000" margin="0 40px 0 0">Free Standard Shipping</Text>
                                    <Text color="#333" paddingBottom={"30px"}>Place your order today and receive it within 3-5 working days</Text>
                                <Text fontSize="14px" fontWeight="500" letterSpacing="0" lineHeight="20px" color="#000" margin="0 40px 0 0">Collect-in-Store</Text>
                                    <Text color="#333" paddingBottom={"30px"}>Order online today and pick up your items in store as early as tomorrow</Text>
                                <Text fontSize="14px" fontWeight="500" letterSpacing="0" lineHeight="20px" color="#000" margin="0 40px 0 0">Free Gift Packaging</Text>
                                    <Text color="#333" paddingBottom={"30px"}>Our gift packaging includes a signature Burberry gift box finished with a hand-tied ribbon</Text>
                                <Text fontSize="14px" fontWeight="500" letterSpacing="0" lineHeight="20px" color="#000" margin="0 40px 0 0">Free Returns</Text>
                                    <Text color="#333" paddingBottom={"30px"}>Enjoy free returns on your order</Text>
                                </Box>
                                </ModalBody>
                            </ModalContent>
                            </Modal>
                        </Link>
                    </Text>
                    <Flex gap={"16px"} paddingBottom="30px">
                        <button className={styles.bagBtn}>ADD TO BAG</button>
                        <button style={{width:"280px", height:"42px", textTransform:"uppercase", border:"1px solid black"}} className={styles.giftBtn}>Send using Gift</button>    
                    </Flex>
                    <Flex alignItems={"center"}>
                    <RiStore3Fill/><Link paddingLeft={"4px"}>Find in Store</Link>
                    </Flex>
                    <Text align={"left"} paddingBottom="30px">Find this item in your closest Burberry store.</Text>

                    <Flex alignItems={"center"}>
                    <BsFillCalendarCheckFill/><Link paddingLeft={"4px"}>Book an appointment</Link>
                    </Flex>
                    <Text align={"left"} paddingBottom="30px">In-store, virtual, or after-care appointment – depending on your country.</Text>
                    <hr/>
                    <Text align={"left"} fontSize="14px" fontWeight="500" letterSpacing="0" line-height="20px" textTransform="uppercase" color="#000" py="16px">PRODUCT DETAILS</Text>
                    <Text align={"left"} paddingBottom="24px">The iconic Burberry trench, made in Yorkshire from shower-resistant gabardine.</Text>
                    <Text align={"left"}>-Coat length: 95cm/37.4in. This is based on a size UK 6.</Text>
                    <Text align={"left"}>-Model’s height: 177cm/5ft 10in. Model wears size UK 8.</Text>
                </Box>
            </Grid>
        </Box>
    </div>
    )
}

export default SingleProductPage

