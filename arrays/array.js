// EXERCISE #1

// const fruits = ['apple', 'banana', 'peach']

// const addToList = (category, item) => {
//     category.push(item)
// }

// const removeLastItem = (category) => {
//     category.pop()
// }

// const addItemFirst = (category, item) => {
//     category.unshift(item)
// }

// const removeFirstItem = (category) => {
//     category.shift()
// }


// addToList(fruits, 'mango')
// console.log(fruits)
// addItemFirst(fruits, 'strawberry')
// console.log(fruits)
// removeFirstItem(fruits)
// console.log(fruits)

// OOP 

class category {
    constructor(item, price) {
        this.item = item
        this.price = `$${price}`
    }
    renameItem(newItem) {
        this.item = newItem
        return this
  
    }
    changePrice(newPrice) {
        this.price = `$${newPrice}`
        return this
    }
}

const fruit1 = new category('Banana', 2)
const fruit2 = new category('Strawberry', 3.75)

fruit1.renameItem('Kiwi').changePrice(4.78)

console.log(fruit1)

