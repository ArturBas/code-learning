const team = {
    _players: [
      {
        firstName: 'James',
        lastName: 'Howlett',
        age: (new Date().getFullYear()-1832)
      },
      {
        firstName: 'Robert',
        lastName: 'Banner',
        age: (new Date().getFullYear()-1969)
      },
      {
        firstName: 'Frank',
        lastName: 'Castle',
        age: (new Date().getFullYear()-1978)
      }
    ],
    _games: [
      {
        opponent: 'Silver Samurai',
        teamPoints: 35,
        opponentPoints: 23
      },
      {
        opponent: 'Red Hulk',
        teamPoints: 56,
        opponentPoints: 38
      },
      {
        opponent: 'Thanos',
        teamPoints: 42,
        opponentPoints: 29
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
      };
      this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
      };
      this._games.push(game);
    }
  }
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players);
  
  team.addGame('Juggernaut', 54, 21);
  team.addGame('Daken', 15, 10);
  team.addGame('Kingpin', 38, 14);
  
  console.log(team.games);