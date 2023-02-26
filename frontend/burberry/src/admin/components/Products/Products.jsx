import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Box, Grid } from '@chakra-ui/react'
import { getProductsApi } from '../Utils/database'
import ProductCard from './ProductCard'
import { getProducts } from '../Utils/database'

const Products = () => {
  const [products, setProducts] = useState([])


  const getData = async () => {
    const data = await getProducts()
    setProducts(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <Box p="20px" border="1px solid #e4e4e4" minHeight="85vh" bg="white">
        <Grid gridTemplateColumns="repeat(4,1fr)" gap="4">
          {
            products?.map((item) => {
              return <ProductCard key={item._id} imgUrl={item.product_img} {...item} price={item.product_price} description={item.product_desc}/>
            })
          }
        </Grid>
      </Box>
    </>
  )
}

export default Products