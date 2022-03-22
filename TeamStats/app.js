/*
We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

const team = {

  _players: [
    {
      firstName: 'Sadio',
      lastName: 'Mane',
      age: 29
    },
    {
      firstname: 'Mohamed',
      lastName: 'Salah',
      age: 29
    },
    {
      firstname: 'Luis',
      lastName: 'Diaz',
      age: 25
    }
  ],
  
  _games: [
    {
      opponent: 'Arsenal',
      teamPoints: 3,
      opponentPoints: 0
    },
    {
      opponent: 'Brighton',
      teamPoints: 3,
      opponentPoints: 0
    },
    {
      opponent: 'West Ham',
      teamPoints: 3,
      opponentPoints: 0
    }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
     let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this.players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }

    this.players.push(game);
  }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 44);

console.log(team.players);

team.addGame('Rangers', 3, 0);
team.addGame('Manchester City', 3, 0);
team.addGame('Celtic', 1, 1);

console.log(team.games);





