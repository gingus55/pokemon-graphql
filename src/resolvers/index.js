const pokemon = require("./pokemon");
const types = require("./types");
const moves = require("./moves");

const resolvers = {
  Query: {
    pokemon,
  },
  Pokemon: {
    types,
    moves,
  },
};

module.exports = resolvers;
