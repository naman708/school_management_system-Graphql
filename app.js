// server.js
const express = require('express');
const sequelize = require('./util/database');
const Dotenv=require('dotenv')

const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const PORT = process.env.PORT || 4000;
Dotenv.config();
async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: PORT }, resolve));
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}
sequelize.sync().then(() => {
  console.log('Database & tables created!');
});


startApolloServer();
