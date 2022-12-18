import { Box, Flex, Grid, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
  return (
    <Flex bg="primary" color="white">
      <Grid
        templateColumns="repeat(2, 1fr)"
        w="100%"
        maxW="1000px"
        margin="0 auto"
        paddingX="1rem"
        paddingY="1.5rem"
      >
        <VStack alignItems="start">
          <Link to="/">About Us</Link>
          <Link to="/">Your Orders</Link>
        </VStack>
        <VStack alignItems="start">
          <Link to="/">About Us</Link>
          <Link to="/">Your Orders</Link>
        </VStack>
      </Grid>
    </Flex>
  )
}

export default Footer
