const { gql } = require("apollo-server");

const typeDefs = gql`
  type Pokemon {
    name: String
    id: ID
    normalSprite: String
    shinySprite: String
    types: [Type]
    moves: [Move]
    weight: Int
    height: Int
  }

  type Type {
    name: String
    typeUrl: String
  }

  type Move {
    name: String
    moveUrl: String
  }

  type Query {
    pokemon(name: String!): Pokemon
  }
`;

module.exports = typeDefs;
