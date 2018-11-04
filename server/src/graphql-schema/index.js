import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import { GRAPHQL } from '../const';
import schema from './schema';

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
const index = new ApolloServer({ schema, ...gqlConfig });
const app = new Koa();
index.applyMiddleware({ app });

const port = 5000;
const host = 'localhost';

app.listen(port, () =>
  console.log(`🚀 Server ready at http://${host}:${port}${index.graphqlPath}`),
);
