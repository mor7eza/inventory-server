const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/typeDefs");

const server = new ApolloServer({
  typeDefs
});

server.listen({ port: process.env.PORT || 5000 }).then(({ url }) => {
  console.log(`Server is running on ${url}`);
});
