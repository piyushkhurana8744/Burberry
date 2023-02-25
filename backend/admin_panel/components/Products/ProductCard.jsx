import React from 'react'
import Styles from "./ProductCard.module.css"
import { Box, Image, Heading, Text, Button, Grid, GridItem, HStack } from '@chakra-ui/react'

const ProductCard = ({ imgUrl, title, price, description }) => {
    return (
        <Box border="1px solid #e4e4e4" p="4">
            <Box className={Styles.image_container} border="1px solid #e4e4e4" height="330px">
                <Image w="90%" m="7% auto" height="90%" src={imgUrl} alt={title} />
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
                            bg: 'cyan.400',
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