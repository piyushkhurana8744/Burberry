import React from 'react'
import Styles from "./ProductCard.module.css"
import { Box, Image, Heading, Text, Button, Grid, GridItem, HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ _id, imgUrl, title, price, description }) => {
    const navigate = useNavigate();

    return (
        <Box onClick={()=>navigate(`/admin/products/${_id}`)} border="1px solid #e4e4e4" p="4" cursor="pointer">
            <Box className={Styles.image_container} border="1px solid #e4e4e4" height="330px">
                <Image w="100%" m="auto" height="100%" src={imgUrl} alt={title} />
            </Box>
            <Grid mt="4" gridTemplateRows="repeat(4,1fr)" gap="3px">
                <GridItem>
                    <Heading noOfLines={2} size="sm">{title}</Heading>
                </GridItem>
                <GridItem>
                    <HStack>
                        <Text fontSize="xl" fontWeight="bold" color="#99568b">₹ {price}</Text>
                    </HStack>
                </GridItem>
                <GridItem>
                    <Text noOfLines={2}>{description}</Text>
                </GridItem>
                <GridItem mt="10px">
                    <Button
                        width="100%"
                        _hover={{
                            bg: '#dbae52',
                            color: 'white',
                        }}
                    >
                        View Details
                    </Button>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default ProductCard