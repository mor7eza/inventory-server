const _ = require("lodash");

const productResolvers = require("../entities/Product/graphql/Schema").resolvers;

module.exports = _.merge(productResolvers);
