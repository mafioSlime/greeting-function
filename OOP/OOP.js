class User {
    constructor(username, email){
        this.username = username;
        this.email = email
    }
}

const userOne = new User('mafiosoSlime', 'mafiosoSlime@gmail.com')
const userTwo = new User('kingOfSlime', 'kingOfSlime@gmail.com')

console.log(userOne, userTwo)

// INSTEAD OF DOING THIS

// const userOne = { 
//     userName: 'mafiosoSlime',
//     email: 'mafiosoSlime@gmail.com'
// }

// const userTwo = {
//     userName: 'kingOfSlime',
//     email: 'kingOfSlime@gmail.com'
// }

// console.log(userOne, userTwo)