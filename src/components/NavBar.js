import React, { useContext } from 'react'
import { Flex, Icon, Image, Text, Grid, GridItem, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { MdMenu } from 'react-icons/md'
import { FiShoppingCart } from 'react-icons/fi'
import SignInButton from './SignInButton'

const NavBar = () => {
  const { openCart, openMenu } = useContext(ShopContext)
  return (
    <Grid templateColumns="repeat(2, 1fr)" paddingX="1rem" paddingY="0.9rem">
      <Flex
        flexDirection={'row'}
        justifyContent={'flex-start'}
        alignItems="center"
      >
        <Icon
          fill="black"
          as={MdMenu}
          w={30}
          h={30}
          marginRight="10px"
          onClick={() => openMenu()}
        />
        <Link to="/">
          <Image
            src="https://cdn.shopify.com/s/files/1/0525/6560/6593/files/Logo.png?v=1645413946"
            w="61px"
            h="20px"
          />
        </Link>
      </Flex>
      <Flex
        flexDirection={'row'}
        justifyContent={'flex-end'}
        alignItems="center"
      >
        <SignInButton />
        <Icon
          onClick={() => openCart()}
          w={30}
          h={30}
          as={FiShoppingCart}
          cursor="pointer"
          marginLeft="1rem"
        />
      </Flex>
    </Grid>
  )
}

export default NavBar
