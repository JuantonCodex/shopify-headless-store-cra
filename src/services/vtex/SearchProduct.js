export default class SearchProduct {
  // constructor() {}

  getWithFilter = async (searchWord) => {
    const response = await fetch(
      `https://${accountName}.vtex.com/api/catalog_system/pub/products/search?ft=${searchWord}`
    )
    const data = await response.json()
    return data
  }
}
