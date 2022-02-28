import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Box, Image, Grid, Text } from '@chakra-ui/react'
import MainSlider from '../components/MainSlider'
import HeroBanner from '../components/HeroBanner/HeroBanner'
const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])
  if (!products) return <div>Loading ...</div>

  return (
    <Box>
      <HeroBanner />
      <MainSlider />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap="1rem"
        padding="1rem"
      >
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
