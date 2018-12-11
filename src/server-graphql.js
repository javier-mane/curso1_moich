// los tres hacenn lo mismo.
// npm i graphql graphql-yoga

// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

import { GraphQLServer } from 'graphql-yoga'
import resolvers from './graphql/resolvers.graphql'

const server = new GraphQLServer({
  typeDefs: './src/graphql/schema.graphql',
  resolvers })

server.start({ port: 3000 }, () => console.log('Server is running on http://localhost:3000'))
