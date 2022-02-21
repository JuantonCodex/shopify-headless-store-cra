import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Box, Image, Grid, Text } from '@chakra-ui/react'
const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])
  console.log('products >', products)
  if (!products) return <div>Loading ...</div>

  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Link to={`/product/${product.handle}`} key={product.title}>
            <Box _hover={{ opacity: '80%' }} textAlign="center">
              <Image src={product.images[0].src} />
              <Text>{product.title}</Text>
              <Text>{product.variants[0].price}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  )
}

export default Home
