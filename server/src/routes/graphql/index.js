import { ApolloServer, gql } from 'apollo-server-koa';
import { GRAPHQL } from '../../const/index';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const formatError =
  process.env.NODE_ENV === 'production'
    ? GRAPHQL.formatErrorProd
    : GRAPHQL.formatErrorDev;
const gqlConfig = {
  context: ctx => ctx.context,
  formatError,
  tracing: true,
  cacheControl: true,
};
const server = new ApolloServer({ typeDefs, resolvers, ...gqlConfig });

export default server;
