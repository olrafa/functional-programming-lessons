class ShoppingCart {
  constructor() {
    this.items = []
  }
  getItems() {
    return this.items
  }
  addItem(itemName, quantity, price) {
    this.items.push({name: itemName, quantity: quantity, pricePerUnit: price})
  }
  clear() {
    this.items.splice(0)
  }
  total() {
    return this.items.reduce((subTotal, currentItem) => subTotal + (currentItem.quantity*currentItem.pricePerUnit), 0)
  }
}
  
module.exports = ShoppingCart