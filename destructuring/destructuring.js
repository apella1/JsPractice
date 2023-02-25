let a, b, rest;

[a, b, ...rest] = ["John", "Peter", "Michael", 234, true];

console.log(rest);

// unpacking specific values from an array

const numbers = [2, 43, 23, 6];

const [k, l] = numbers;

console.log(k, l);

// unpacking objects

const games = {
  name: "football",
  noOfPlayers: 11,
};

let { game, players } = games;

console.log(players);

console.log(typeof games.name);

const gameName = games.name;
console.log(gameName);
