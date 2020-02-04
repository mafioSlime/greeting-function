const team1 = ['red team', 'blue team', 'yellow team' ]


const generateID = () => {
 let id = Math.floor(Math.random() * (100 - 1)) + 1
 return id

}


const chooseRandomTeam = (teams) => {
    let randomTeam = Math.floor(Math.random() * (-2 - 1)) + 1 * teams.length
    // return teams[`${randomTeam}`]
    console.log(teams[`${randomTeam}`])
}

const createPlayer = (playerName) => {
    return {
        id: generateID(),
        name: playerName,
        score: 0,
        team: chooseRandomTeam(team1)
    }
}

let result = console.log(chooseRandomTeam(team1))
