const compliment = document.getElementById('compliment')
const comlipmentContainer = document.getElementsByClassName('compliment-container')

const is = ['he', 'she', 'it']
const are = ['you', 'they', 'we']
const am = 'I'

let noun = prompt("Enter a noun")
let adjective = prompt("Enter an adjective")

is.forEach(word => {
    if (noun === word) {
        compliment.innerHTML = `${noun} is ${adjective}`
    } else {
        console.log('error in input occured')
    }
})