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
  Image,
  Button,
  Link,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

const Cart = () => {
  const { removeLineItem, isCartOpen, closeCart, openCart, checkout } =
    useContext(ShopContext)

  console.log('checkout >', checkout)

  return (
    <>
      <Drawer placement="right" onClose={closeCart} isOpen={isCartOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Your Shopping Cart
          </DrawerHeader>
          <DrawerBody pt="1rem">
            {checkout.lineItems &&
              checkout.lineItems.map((product) => (
                <Grid
                  templateColumns="1fr 1fr 0.3fr 0.3fr"
                  gap={1}
                  key={product.id}
                  alignItems="center"
                  mb={'0.5rem'}
                >
                  <Image src={product.variant.image.src} />
                  <Text pl="10px">{product.title}</Text>
                  <Text textAlign="center">{product.quantity}</Text>
                  <DeleteIcon
                    cursor="pointer"
                    w={4}
                    h={4}
                    justifySelf="flex-end"
                    onClick={() => removeLineItem(product.id)}
                  />
                </Grid>
              ))}
          </DrawerBody>
          <DrawerFooter>
            <Button w="100%">
              <Link w="100%" href={checkout.webUrl}>
                Checkout
              </Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
