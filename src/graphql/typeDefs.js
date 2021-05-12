const { gql } = require("apollo-server");

const productTypes = require("../entities/Product/graphql/Schema").typeDefs;

const typeDefs = gql`
  type MutationResponse {
    code: Int!
    success: Boolean!
    message: String!
    id: ID
  }

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

module.exports = [typeDefs, productTypes];
