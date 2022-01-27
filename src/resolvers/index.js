const pokemon = require("./pokemon");
const types = require("./types");

const resolvers = {
  Query: {
    pokemon,
  },
  Pokemon: {
    types,
  },
};

module.exports = resolvers;
