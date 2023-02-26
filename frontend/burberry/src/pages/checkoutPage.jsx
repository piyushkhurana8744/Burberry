import {Box,Flex,Text,Button} from "@chakra-ui/react"
import {TiTick} from "react-icons/ti"
import { Checkbox, CheckboxGroup ,Image,Divider} from '@chakra-ui/react'
import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import {Link} from "react-router-dom"
function Checkout(){
    const { name, token } = useSelector((store) => store.auth);
    const {data}=useSelector((store)=>store.cart)
    const subtotal=data.reduce((acc,el)=>acc+Number(el.product_price)*Number(el.quantity),0)
   
   
    return(
       <Box>
          <Flex width="90%" margin="auto" paddingBottom={"40px"}>
          <Box width="65%" margin="auto" marginTop="20px">
          <Flex>
            <Box width="100%" >
                <Flex justifyContent={"space-between"}  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" marginTop={"10px"} padding="10px" alignItems={"center"}>
                    <Box textAlign={"start"}>
                    <Flex gap="20px" alignItems={"center"}>
                    <Button fontWeight={"500"} height="30px">1</Button>
                    <Text fontWeight={"600"} fontSize={"20px"} color="#878787">Login</Text>
                    <TiTick fontSize={"30px"} color="green"/>
                    </Flex>
                    <Text fontWeight={"600"} fontSize={"18px"} marginLeft="50px">{name}</Text>
                    </Box>
                       <Link to="/login"><Button padding={"10px 40px 10px 40px"}>CHANGE</Button></Link>  
                </Flex>
                
                <Flex justifyContent={"space-between"}  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" marginTop={"10px"} padding="10px" alignItems={"center"}>
                    <Box textAlign={"start"}>
                    <Flex gap="20px" alignItems={"center"}>
                    <Button fontWeight={"500"} height="30px">2</Button>
                    <Text fontWeight={"600"} fontSize={"20px"} color="#878787">ORDER SUMMARY</Text>
                    <TiTick fontSize={"30px"} color="green"/>
                    </Flex>
                    <Text fontWeight={"600"} fontSize={"18px"} marginLeft="60px">{data.length}  Items</Text>
                    </Box>
                    <Link to="/cart"><Button padding={"10px 40px 10px 40px"}>CHANGE</Button> </Link> 
                </Flex>
            </Box>
          </Flex>
          <Box marginTop={"20px"} boxShadow="rgba(0, 0, 0, 0.24) 0px" >
            <Flex backgroundColor={"#2874f0"}   alignItems={"center"} padding="10px" gap="15px">
            <Button fontWeight={"500"} height="25px">3</Button>
            <Text color={"#fff"} fontWeight="600" fontSize="20px">PAYMENT OPTIONS</Text>
            </Flex>
            <Box textAlign={"start"} borderTop="1px solid #E0E0E0" padding="10px">
            <Checkbox size='md' colorScheme='green'  textAlign={"start"}>
                <Flex gap="10px">
                <Image width="40px" src="https://www.pngitem.com/pimgs/m/274-2746824_bhim-icon-png-image-free-download-searchpng-bhim.png"/>
           <Text fontSize={"23px"} fontWeight="600">UPI</Text>
                </Flex>
           
            </Checkbox>
            </Box>
            <Box textAlign={"start"} borderTop="1px solid #E0E0E0" padding="10px">
            <Checkbox size='md' colorScheme='green' >
                <Flex gap="10px"  textAlign={"start"}>
                <Image width="50px" src="https://freehindidesign.com/wp-content/uploads/2021/04/Jio-logo.jpg"/>
           <Text fontSize={"23px"} fontWeight="600">UPI</Text>
                </Flex>
           
            </Checkbox>
            </Box>
            <Box textAlign={"start"}  borderTop="1px solid #E0E0E0" padding="10px">
           <Flex gap="10px"  textAlign={"start"}>
                <Checkbox size='md' colorScheme='green' > </Checkbox>
           <Text fontSize={"20px"} fontWeight="500">Credit / Debit / ATM Card</Text>
                </Flex>
           <Text color="grey" fontSize="17px" fontWeight={"500"} marginLeft="30px">Add as per the RBI guidelines</Text>
           
            </Box>
            <Box textAlign={"start"}  borderTop="1px solid #E0E0E0"padding="10px">
            <Checkbox size='md' colorScheme='green' >
           <Text fontSize={"20px"} fontWeight="600">Net Banking</Text>
           
            </Checkbox>
            </Box>
            <Box textAlign={"start"}  borderTop="1px solid #E0E0E0"padding="10px">
            <Checkbox size='md' colorScheme='green' >
           <Text fontSize={"20px"} fontWeight="600">EMI (Easy Installments)</Text>
           
            </Checkbox>
            </Box>
            <Box textAlign={"start"}  borderTop="1px solid #E0E0E0"padding="10px">
            <Checkbox size='md' colorScheme='green' >
           <Text fontSize={"20px"} fontWeight="600">Cash On Delivery</Text>
           
            </Checkbox>
            </Box>
          </Box>
          </Box>
          <Box width="30%" textAlign={"start"} marginTop="30px"  boxShadow= " rgba(0, 0, 0, 0.24) 0px 3px 8px" height={"330px"} padding="20px" >
                 <Text fontSize={"24px"} color="grey" fontWeight={"600"}>Price Details</Text>
                 <Divider border="3px solid "></Divider>
                 <Flex justifyContent={"space-between"} marginTop="10px">
                     <Text fontSize={"17px"} fontWeight="500">Price  ({data.length} items)</Text>
                     <Text fontSize={"17px"} fontWeight="500">₹{subtotal}</Text>
                 </Flex>
                 <Flex justifyContent={"space-between"} marginTop="10px">
                     <Text fontSize={"17px"} fontWeight="500">Discount</Text>
                     <Text color="green" fontSize={"17px"} fontWeight="500">-₹{subtotal*0.05}</Text>
                 </Flex>
                 <Flex justifyContent={"space-between"} marginTop="10px">
                     <Text fontSize={"17px"} fontWeight="500">Delivery Charges</Text>
                     <Text color="green" fontSize={"17px"} fontWeight="500">Free</Text>
                 </Flex>
                 <Flex justifyContent={"space-between"} marginTop="10px">
                     <Text fontSize={"17px"} fontWeight="500">Secured Packaging Fee</Text>
                     <Text fontSize={"17px"} fontWeight="500">₹{29*data.length}</Text>
                 </Flex>
                 <Divider border="3px solid " marginTop={"10px"} ></Divider>
                 <Flex justifyContent={"space-between"} marginTop="10px" alignItems={"center"}>
                     <Text fontSize={"22px"} fontWeight="500">Total Amount</Text>
                     <Text fontSize={"20px"} fontWeight="500">₹{Math.ceil(subtotal-subtotal*0.05)}</Text>
                 </Flex>
                 <Divider border="3px solid " marginTop={"10px"} ></Divider>
                 <Text marginTop="10px" color="green" fontSize={"18px"} fontWeight="500">You will save ₹{subtotal*0.05} on this order</Text>
                 <Box marginTop="40px">
                <Button padding="20px 80px 20px 80px" fontWeight={"600"} fontSize="20px" backgroundColor={"#fb641b"} color="white" onClick={()=>alert("Your Order is Confirmed")}>Confirm Order</Button>
                 </Box>
                 
             </Box>
             
          </Flex>
          
          
          
       </Box>
    )
}
export default Checkout