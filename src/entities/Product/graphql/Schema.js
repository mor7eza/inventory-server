const { gql } = require("apollo-server");

const { addVendor } = require("../functions/vendor");
const { addCategory } = require("../functions/category");
const { addLocation } = require("../functions/location");
const { addTag } = require("../functions/tag");
const { addProduct } = require("../functions/product");

//////// TYPES ////////
module.exports.typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    quantity: Int!
    sku: String
    image: String
    vendor: Vendor
    category: Category
    location: Location
    tags: [Tag]
  }

  input ProductData {
    title: String!
    quantity: Int
    sku: String
    image: String
    vendor: String
    category: String
    location: String
    tags: [String]
  }

  type Vendor {
    id: ID!
    title: String!
    products: [Product]
  }

  type Category {
    id: ID!
    title: String!
    products: [Product]
  }

  type Location {
    id: ID!
    title: String!
    products: [Product]
  }

  type Tag {
    id: ID!
    title: String!
    products: [Product]
  }

  extend type Query {
    _emptyProduct: String
  }

  extend type Mutation {
    addVendor(title: String!): MutationResponse
    addCategory(title: String!): MutationResponse
    addLocation(title: String!): MutationResponse
    addTag(title: String!): MutationResponse
    addProduct(input: ProductData): MutationResponse
  }
`;

//////// RESOLVERS ////////
module.exports.resolvers = {
  Query: {},
  Mutation: {
    addVendor: (_, args) => addVendor(args),
    addCategory: (_, args) => addCategory(args),
    addLocation: (_, args) => addLocation(args),
    addTag: (_, args) => addTag(args),
    addProduct: (_, args) => addProduct(args)
  }
};
