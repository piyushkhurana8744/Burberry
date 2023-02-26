import React from 'react'
import {Box,Image,Flex,Text,Icon,Grid,Input} from "@chakra-ui/react"
import Footer from '../components/Footer'
const Homepage = () => {
  return (
    <div>
        <Box>
            <Grid templateColumns={"repeat(2,1fr)"} gap="5px" >
                <Box >
                <Image src="https://assets.burberry.com/is/image/Burberryltd/7D3E2F24-04F9-4837-8CF8-2DDE40B0BA52?$BBY_V2_ML_1x1$&wid=1251&hei=1251" width="100%"  ></Image>
                <Text fontSize="30px" fontWeight={"300"} marginTop="-10px" backgroundColor={"#e9e9e9"} color="#4a4a4a" paddingBottom={"10px"}>
                    Women's New Arrival
                </Text>
                </Box>
                <Box  paddingBottom={"10px"}>
                <Image src="https://assets.burberry.com/is/image/Burberryltd/DCD5E15F-93F0-4C2E-9A38-B381B4AB7326?$BBY_V2_ML_1x1$&wid=1251&hei=1251" width="100%"  ></Image>
                <Text fontSize="30px" fontWeight={"300"} marginTop="-10px" backgroundColor={"#e9e9e9"} color="#4a4a4a" paddingBottom={"10px"}>
                    Men's New Arrival
                </Text>
                </Box>
            </Grid>
            <Grid templateColumns={"repeat(2,1fr)"} >
                <Box >
                <Image src="https://www.fashiongonerogue.com/wp-content/uploads/2023/02/Burberry-Daniel-Lee-2023-Campaign01.jpg" width="100%" height="600px"></Image>
                <Text fontSize="30px" fontWeight={"300"} marginTop="-10px" backgroundColor={"#030406"} color="white" paddingBottom={"10px"} textAlign="right">
                        The Herita
                </Text>
                </Box>
                <Box  paddingBottom={"10px"}>
                <Image src="https://mediaslide-europe.storage.googleapis.com/success/news_pictures/2023/02/large-1675680362-7d170db1479af6fa18591034f2c6b110.jpg" width="100%" height="600px"></Image>
                <Text fontSize="30px" fontWeight={"300"} marginTop="-10px" backgroundColor={"#d9d8db"} color="white" paddingBottom={"10px"} textAlign="left">
                    geCollection
                </Text>
                </Box>
                
            </Grid>
            <Box
              w={"99%"}
              p={2}
              height={"800px"}
              margin="auto"
              backgroundImage="url('https://assets.burberry.com/is/image/Burberryltd/513CC023-678E-4793-925E-CEE0067DF98E?wid=1366')"
            >
             <Text fontSize={"40px"} color="white" marginTop="670px">Bags</Text>
            </Box>
            <Box>
               <Text fontSize={"38px"} fontWeight="500">Children</Text>
               <Text fontSize={"38px"} fontWeight="500">The Trench Coat</Text>
               <Text fontSize={"38px"} fontWeight="500">SCARVES</Text>
            </Box>
            <hr />
        </Box>
        <Footer />
    </div>
  )
}

export default Homepage
