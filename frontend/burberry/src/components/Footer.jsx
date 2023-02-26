import React from 'react'
import {Box,Image,Flex,Text,Icon,Grid,Input} from "@chakra-ui/react"
const Footer = () => {
  return (
    <div>
      <Box id="footer" paddingBottom={"40px"}>
               <Flex justifyContent={"space-around"}>
                <Box width="25%">
                    <Text>
                        SIGN UP
                    </Text>
                    <Text fontSize="16px" textAlign={"start"}>
                    Sign up below for updates about the world of Burberry, including collection launches and early access to limited-edition products and collaborations.
                    </Text>
                    <Input placeholder="Email" border="none"></Input>
                </Box>
                <Box>
                    <Text>STORE LOCATOR</Text>
                </Box>
                <Box>
                    <Text>
                    CUSTOMER SERVICE
                    </Text>
                    <Text>
                    LEGAL & COOKIES
                    </Text>
                    <Text>
                    OUR COMPANY
                    </Text>
                </Box>
                <Box>
                    <Text>
                    LANGUAGE
                    </Text>
                    <Text color="grey">
                    ENGLISH
                    </Text>
                    <Text>SHIPPING TO</Text>
                    <Text color="grey">INDIA</Text>
                </Box>
               </Flex>
            </Box>
            <hr marginTop="20px"/>
            <Box textAlign={"start"} width="90%" margin={"auto"} lineHeight="30px" paddingBottom={"20px"}>
                <Text fontSize={"14px"} color="grey">If you are using a screen-reader and are having problems using this website, please call variable_country_customer_service_phone or contact us for assistance.</Text>
                <Text fontSize={"14px"} color="grey">Burberry Limited, Horseferry House, Horseferry Road, London, SW1P 2AW</Text>
                <Text fontSize={"14px"} color="grey">Registered in England & Wales</Text>
                <Text fontSize={"14px"} color="grey">Registered Company Number: 00162636</Text>
            </Box>
    </div>
  )
}

export default Footer
