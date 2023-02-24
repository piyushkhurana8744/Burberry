import React from 'react'
import { Box, Heading, Text, HStack, VStack, Card } from '@chakra-ui/react'

const StatsCard = ({ count, title, icon }) => {
    return (
        <Box p="15px" border="1px solid #e4e4e4">
            <HStack justifyContent="space-between">
                <VStack align="start">
                    <Heading>{count}</Heading>
                    <Text>{title}</Text>
                </VStack>
                <Card p="20px" bg="#edf2f7" borderRadius="4px">
                    {
                        icon
                    }
                </Card>
            </HStack>
        </Box>
    )
}

export default StatsCard