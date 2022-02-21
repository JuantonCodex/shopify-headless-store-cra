import React, { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Box, Button, Grid, Heading, Image, Text } from '@chakra-ui/react'

import { ShopContext } from '../context/shopContext'

const ProductPage = () => {
  const { handle } = useParams()
  console.log('handle', handle)
  const { addItemToCheckout, fetchProductWithHandle, product } =
    useContext(ShopContext)

  useEffect(() => {
    fetchProductWithHandle(handle)
  }, [fetchProductWithHandle, handle])

  if (!product.title) return <div>Loading ...</div>

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} paddingX="1rem">
        <Image src={product.images[0].src} />
        <Box>
          <Heading as="h1" paddingBottom="1.5rem">
            {product.title}
          </Heading>
          <Text paddingBottom="1rem">{product.variants[0].price}</Text>
          <Text paddingBottom="1rem">{product.description}</Text>
          <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
            Add to cart
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default ProductPage
