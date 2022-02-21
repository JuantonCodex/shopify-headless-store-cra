import Client from 'shopify-buy'

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: `${process.env.REACT_APP_SHOPIFY_DOMAIN}.myshopify.com`,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_API_TOKEN,
})

export default class Product {
  // constructor() {}

  // Get product by seo name
  getWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle)
    return product
  }
}
