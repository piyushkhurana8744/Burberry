import { Box, Button, Grid, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { RiArrowDownSLine } from "react-icons/ri"
import Product from '../components/product'

const MensPage = () => {
    return (
        <Box pb="50px">
            <Heading fontSize="16px">MEN’S OUTERWEAR</Heading>
            <Text fontSize="14px" m="auto" maxW={["70%", "50%", "30%"]}>Honouring the spirit of adventure inherent in every Burberry garment, the men’s outerwear collection mixes timeless trench coats with modern puffer jackets in seasonal Night Check.</Text>

            <Box mt="50px" mb="40px" borderTop="1px solid #e4e4e4" borderBottom="1px solid #e4e4e4">
                <HStack fontWeight="500" textTransform="uppercase" fontSize="14px" spacing="30px" px="20px" py="10px">
                    <Text>Colour <RiArrowDownSLine /></Text>
                    <Text>Category <RiArrowDownSLine /></Text>
                    <Text>Style <RiArrowDownSLine /></Text>
                    <Text>Material <RiArrowDownSLine /></Text>
                    <Text>Size <RiArrowDownSLine /></Text>
                    <Text>Length <RiArrowDownSLine /></Text>
                </HStack>
            </Box>
            <Text fontSize="12px">201 results</Text>
            <Text fontWeight="500">Discover Heritage Trench Coats</Text>
            <Grid mt="50px" mb="50px" gap="2px" gridTemplateColumns="repeat(4,1fr)">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </Grid>
            <Button textTransform="uppercase" cursor="pointer" bg="transparent" padding="12px 40px">View 11 More</Button>
        </Box>
    )
}

export default MensPage