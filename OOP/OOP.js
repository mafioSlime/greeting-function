class User {
    constructor(username, email){
        this.username = username
        this.email = email
        this.score = 0
    }
    login() {
        console.log(`${this.username} has logged in`)
        return this
    }
    logout() {
        console.log(`${this.username} has logged out`)
        return this
    }
    incScore() {
        this.score ++
        return this
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => u.username !== user.username)
    }
}

const userOne = new User('mafiosoSlime', 'mafiosoSlime@gmail.com')
const userTwo = new User('kingOfSlime', 'kingOfSlime@gmail.com')
const userThree = new Admin('slimeJXVI', 'johnjaroldxvi@gmail.com')

users = [userOne, userTwo, userThree]

userThree.deleteUser(userTwo)
console.log(users)

