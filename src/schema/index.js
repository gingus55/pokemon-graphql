const { gql } = require("apollo-server");

const typeDefs = gql`
  type Pokemon {
    name: String
    id: ID
    normalSprite: String
    shinySprite: String
    types: [Type]
    weight: Int
    height: Int
  }

  type Type {
    name: String
    typeUrl: String
  }

  type Query {
    pokemon(name: String!): Pokemon
  }
`;

module.exports = typeDefs;
