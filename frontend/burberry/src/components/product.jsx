import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Product = () => {
  return (
    <Box fontSize="12px" pb="50px">
        <Image width="100%" src='https://assets.burberry.com/is/image/Burberryltd/3332191E-4C4F-4A67-91D1-9F3A57B17DA2?$BBY_V2_SL_1x1$&wid=1251&hei=1251' />
        <Heading fontSize="14px">
        Short Kensington Heritage Trench Coat
        </Heading>
        <Text>
            3 Colours
        </Text>
        <Text textTransform="uppercase">
            Regular fit
        </Text>
    </Box>
  )
}

export default Product