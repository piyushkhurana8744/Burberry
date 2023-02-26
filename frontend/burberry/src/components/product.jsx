import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({_id, product_img, product_title, product_price }) => {
  const navigate = useNavigate();



  return (
    <Box onClick={()=>navigate(`/products/${_id}`)} cursor="pointer" fontSize="12px" pb="50px">
      <Image width="100%" src={product_img} alt={product_title} />
      <Heading mt="30px" fontSize="14px">
        {product_title}
      </Heading>
      <Text>
        3 Colours
      </Text>
      <Text textTransform="uppercase">
        ₹ {product_price}
      </Text>
      <Text textTransform="uppercase">
        Regular fit
      </Text>
    </Box>
  )
}

export default Product