import React, { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Text,
  Link as LinkChakra,
} from '@chakra-ui/react'
import { IoIosArrowRoundBack, IoIosArrowForward } from 'react-icons/io'
import { ShopContext } from '../context/shopContext'
import { ChevronRightIcon } from '@chakra-ui/icons'
const ProductPage = () => {
  const { handle } = useParams()
  const { addItemToCheckout, fetchProductWithHandle, product } =
    useContext(ShopContext)

  // console.log('product', product)
  const productHasVariants = product?.variants?.map((variant) => {
    const availableOptions = variant.selectedOptions.map((option) =>
      option.name.toLowerCase() !== 'title' ? true : false
    )
    console.log('availableOptions', availableOptions)

    return availableOptions.includes(false) ? false : true
  })

  console.log('productHasVariants', productHasVariants)

  useEffect(() => {
    fetchProductWithHandle(handle)
  }, [fetchProductWithHandle, handle])

  console.log('pd', product)

  if (!product.title) return <div>Loading ...</div>

  return (
    <Box padding="3rem 2rem 2rem 2rem">
      <Grid
        // templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
        templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <Box>
          <Image src={product.images[0].src} />
          <Button
            d="flex"
            leftIcon={<IoIosArrowRoundBack />}
            variant="unstyled"
          >
            Home
          </Button>
        </Box>

        <Box>
          <LinkChakra
            to="/"
            display="inline-flex"
            alignItems="center"
            fontWeight="500"
            color="primary"
            mb="12px"
          >
            {product.vendor}
            <Box display="inline-block">
              <IoIosArrowForward />
            </Box>
          </LinkChakra>
          <Heading as="h1" mb=".5rem" fontSize="24px" fontWeight="normal">
            {product.title}
          </Heading>
          <Text fontSize="14px" size="sm" color="gray.500" mb="0.5rem">
            Ref.: 23242
          </Text>

          {productHasVariants[0]
            ? product.variants.map((variant) =>
                variant.selectedOptions.map((option) => (
                  <Box key={option.name}>
                    <Text
                      fontSize="14px"
                      color="gray.500"
                      mb="0.5rem"
                      d="inline"
                    >
                      {option.name}:
                    </Text>
                    <Text
                      d="inline-block"
                      fontWeight="bold"
                      fontSize="14px"
                      color="gray.500"
                      mb="0.5rem"
                      pl="5px"
                    >
                      {option.value}
                    </Text>
                  </Box>
                ))
              )
            : null}

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
