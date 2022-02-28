import React, { useContext } from 'react'
import { Flex, Icon, Image, Grid, Badge, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { MdMenu } from 'react-icons/md'
import { FiShoppingCart } from 'react-icons/fi'
import { BiUserCircle } from 'react-icons/bi'
import { FaRegUserCircle } from 'react-icons/fa'
import SignInButton from './SignInButton'

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext)
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
      <Flex justifyContent={'flex-end'}>
        <Flex>
          <Icon as={FaRegUserCircle} w="30px" h="30px" />
        </Flex>
        <Flex alignItems="center" position="relative" marginRight="0.5rem">
          <Icon
            onClick={() => openCart()}
            w="30px"
            h="30px"
            as={FiShoppingCart}
            cursor="pointer"
            marginLeft=".8rem"
          />
          <Badge
            bg="secondary"
            color="white"
            w="20px"
            h="20px"
            borderRadius="50%"
            pos="absolute"
            top="-3px"
            lineHeight="20px"
            textAlign="center"
            right="-10px"
            fontSize=".7rem"
          >
            {checkout.lineItems?.length}
          </Badge>
        </Flex>
      </Flex>
    </Grid>
  )
}

export default NavBar
