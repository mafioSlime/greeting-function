const welcome = document.getElementById('welcome')


const greetings = () => {
    alert('Hello Stranger!')
    let askName = prompt('What is your name?')
    let name = askName

    if (name === null) {
        alert('Nice to meet you!')
    } else {
        alert(`Nice to meet you ${name}`)
    }

    welcome.innerHTML = `<h1>Welcome to our hub ${name}</h1>`
}

greetings()



