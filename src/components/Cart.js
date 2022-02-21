import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import React, { useState, useDisclosure, useContext } from 'react'
import { ShopContext } from '../context/shopContext'

const Cart = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const [placement, setPlacement] = useState('right')
  const { isCartOpen, closeCart, openCart, checkout } = useContext(ShopContext)

  return (
    <>
      <Drawer placement="right" onClose={closeCart} isOpen={isCartOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
