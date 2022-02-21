export default class Product {
  // constructor() {}

  getWithFilter = async (searchWord) => {
    const response = await fetch(
      `https://plazavea.com.pe/api/catalog_system/pub/products/search?ft=${searchWord}`
    )
    const data = await response.json()
    return data
  }
}
