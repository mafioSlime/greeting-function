// EXERCISE #1

const fruits = ['apple', 'banana', 'peach']

const addToList = (category, item) => {
    category.push(item)
}

const removeLastItem = (category) => {
    category.pop()
}

const addItemFirst = (category, item) => {
    category.unshift(item)
}

const removeFirstItem = (category) => {
    category.shift()
}


addToList(fruits, 'mango')
console.log(fruits)
addItemFirst(fruits, 'strawberry')
console.log(fruits)
removeFirstItem(fruits)
console.log(fruits)