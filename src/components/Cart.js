import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Grid,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

const Cart = () => {
  const { removeLineItem, isCartOpen, closeCart, openCart, checkout } =
    useContext(ShopContext)

  return (
    <>
      <Drawer placement="right" onClose={closeCart} isOpen={isCartOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Your Shopping Cart
          </DrawerHeader>
          <DrawerBody>
            {checkout.lineItems &&
              checkout.lineItems.map((product) => (
                <Grid templateColumns="repeat(3, 1fr)" gap={1} key={product.id}>
                  <Text>{product.title}</Text>
                  <Text>{product.quantity}</Text>
                  <DeleteIcon
                    cursor="pointer"
                    w={4}
                    h={4}
                    justifySelf="flex-end"
                    alignSelf="center"
                    onClick={() => removeLineItem()}
                  />
                </Grid>
              ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
