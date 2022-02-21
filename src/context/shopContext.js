import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext()

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: `${process.env.REACT_APP_SHOPIFY_DOMAIN}.myshopify.com`,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_API_TOKEN,
})

export class ShopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  }

  componentDidMount() {
    if (localStorage.getItem('checkout_id')) {
      this.fetchCheckout(localStorage.checkout_id)
    } else {
      this.createCheckout()
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create()
    localStorage.setItem('checkout_id', checkout.id)
    this.setState({ checkout })
  }

  fetchCheckout = async (checkoutId) => {
    const checkout = await client.checkout.fetch(checkoutId)
    console.log('>', checkout)

    this.setState({ checkout })
  }

  createItemToCheckout = async () => {}

  removeLineItem = async (lineItemsIdsToRemove) => {}

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll()
    this.setState({ products })
  }

  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle)
    this.setState({ product })
  }

  closeCart = () => {
    this.setState({ isCartOpen: false })
  }

  openCart = () => {
    this.setState({ isCartOpen: true })
  }

  closeMenu = () => {}

  openMenu = () => {}

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          closeCart: this.closeCart,
          openCart: this.openCart,
          closeMenu: this.closeMenu,
          openMenu: this.openMenu,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    )
  }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }

export default ShopProvider
