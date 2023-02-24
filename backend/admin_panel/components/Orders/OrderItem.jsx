import React from 'react'
import { Image, Badge, Td, Tr, IconButton, ButtonGroup, useToast } from '@chakra-ui/react'
import { FiCheck, FiEdit, FiX } from "react-icons/fi"
import { updateOrder } from '../Utils/database'

const OrderItem = ({ imgUrl, orderId, userId, productId, price, qty, delivered }) => {
    const toast = useToast()

    const markDelivered = async () => {

        try {
            await updateOrder(orderId, { delivered: true })
            toast({
                title: 'Order Delivered.',
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: "top"
            })
        } catch (err) {
            console.log(err)
        }
    }
    const markUnDelivered = async () => {
        try {
            await updateOrder(orderId, { delivered: false })
            toast({
                title: 'Order Not Delivered.',
                status: 'warning',
                duration: 2000,
                isClosable: true,
                position: "top"
            })
        } catch (err) {

        }

    }

    return (
        <Tr p="10px" border="1px solid #e4e4e4">
            <Td>
                <Image src={imgUrl} alt="product image" width="55px" height="50px" />
            </Td>
            <Td>{orderId.slice(parseInt(orderId.length / 2))}</Td>
            <Td>{userId.slice(parseInt(userId.length / 2))}</Td>
            <Td>{productId.slice(parseInt(productId.length / 2))}</Td>
            <Td>₹ {price}</Td>
            <Td>{qty}</Td>
            <Td>
                <Badge colorScheme={delivered ? "green" : "red"}>{delivered ? "Delivered" : "Pending"}</Badge>
            </Td>
            <Td>
                <ButtonGroup>
                    <IconButton>
                        <FiEdit />
                    </IconButton>
                    <IconButton onClick={markDelivered}>
                        <FiCheck />
                    </IconButton>
                    <IconButton onClick={markUnDelivered}>
                        <FiX />
                    </IconButton>
                </ButtonGroup>
            </Td>
        </Tr>
    )
}

export default OrderItem