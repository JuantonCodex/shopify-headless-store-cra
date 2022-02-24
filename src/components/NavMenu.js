import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
} from '@chakra-ui/react'
const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useContext(ShopContext)
  return (
    <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <VStack>
            <Link to="/">About US</Link>
            <Link to="/">Learn More</Link>
            <Link to="/">Contact US</Link>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default NavMenu
