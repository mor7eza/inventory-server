const { gql } = require("apollo-server");

const addVendor = require("../functions/addVendor");
const addCategory = require("../functions/addCategory");
const addLocation = require("../functions/addLocation");
const addTag = require("../functions/addTag");

//////// TYPES ////////
module.exports.typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    quantity: Int!
    sku: String
    image: String
    vendor: Vendor
    category: Category
    location: Location
    tags: [Tag]
  }

  type Vendor {
    id: ID!
    name: String!
    products: [Product]
  }

  type Category {
    id: ID!
    name: String!
    products: [Product]
  }

  type Location {
    id: ID!
    name: String!
    products: [Product]
  }

  type Tag {
    id: ID!
    name: String!
    products: [Product]
  }

  extend type Query {
    _emptyProduct: String
  }

  extend type Mutation {
    addVendor(name: String!): MutationResponse
    addCategory(name: String!): MutationResponse
    addLocation(name: String!): MutationResponse
    addTag(name: String!): MutationResponse
  }
`;

//////// RESOLVERS ////////
module.exports.resolvers = {
  Query: {},
  Mutation: {
    addVendor: (_, args) => addVendor(args),
    addCategory: (_, args) => addCategory(args),
    addLocation: (_, args) => addLocation(args),
    addTag: (_, args) => addTag(args)
  }
};
