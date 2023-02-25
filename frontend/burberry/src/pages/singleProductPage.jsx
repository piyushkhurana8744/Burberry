import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react"


const SingleProductPage = () =>{
    return(
        <div>
            <Box>
                <Grid templateColumns={"repeat(2,1fr)"} gap="4px">
                    <Box>
                        <Image src="https://assets.burberry.com/is/image/Burberryltd/6A9059F2-BBDC-4B6C-81FE-A934BE88A274?$BBY_V2_SL_1x1$&wid=1251&hei=1251" w="100%"></Image>
                    </Box>
                    <Box border={"1px solid green"} paddingLeft={"8%"}>
                        <Text align={"left"} cursor={"pointer"} w="40%">Women |  New Arrivals  |  New In</Text>
                        <Text align={"left"} fontWeight="500">Check Panel Cotton Gabardine Trench Coat</Text>
                        <Text color={"#333"} align={"left"} fontSize="14px" fontWeight={"400"}>$2590</Text>
                        <Text align={"left"} color={"#666666"} fontSize="12px">Instalment payments available</Text>
                        <hr/>
                        <Flex alignItems={"center"} gap="8px">
                        <Text fontWeight={"500"} align={"left"} fontSize="14px">COLOUR:</Text>
                        <Text fontSize={"14px"} color="#333" fontWeight={"400"}>Soft Fawn</Text>
                        </Flex>
                        <hr/>
                        <Flex alignItems={"center"} gap="8px">
                        <Text fontWeight={"500"} align={"left"} fontSize="14px">SIZE (US):</Text>
                        <Text fontSize={"14px"} color="#333" fontWeight={"400"}>Size Chart</Text>
                        </Flex>
                        <Flex alignItems={"center"}>
                        <Text border={"1px solid black"} padding="10px" margin={"0 8px 8px 0"} minWidth="44px"  fontWeight={"400"} align={"center"} fontSize="14px" lineHeight={"20px"}>0</Text>
                        <Text border={"1px solid black"} padding="10px" margin={"0 8px 8px 0"} minWidth="44px"  fontWeight={"400"} align={"center"} fontSize="14px">02</Text>
                        <Text border={"1px solid black"} padding="10px" margin={"0 8px 8px 0"} minWidth="44px"  fontWeight={"400"} align={"center"} fontSize="14px">04</Text>
                        <Text border={"1px solid black"} padding="10px" margin={"0 8px 8px 0"} minWidth="44px"  fontWeight={"400"} align={"center"} fontSize="14px">06</Text>
                        <Text border={"1px solid black"} padding="10px" margin={"0 8px 8px 0"} minWidth="44px"  fontWeight={"400"} align={"center"} fontSize="14px">08</Text>
                        <Text border={"1px solid black"} padding="10px" margin={"0 8px 8px 0"} minWidth="44px"  fontWeight={"400"} align={"center"} fontSize="14px">10</Text>
                        <Text border={"1px solid black"} padding="10px" margin={"0 8px 8px 0"} minWidth="44px"  fontWeight={"400"} align={"center"} fontSize="14px">12</Text>
                        <Text border={"1px solid black"} padding="10px" margin={"0 8px 8px 0"} minWidth="44px"  fontWeight={"400"} align={"center"} fontSize="14px">14</Text>
                        
                        </Flex>
                    </Box>
                </Grid>
            </Box>
        </div>
    )
}

export default SingleProductPage