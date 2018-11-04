import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import fs from 'fs';
import https from 'https';
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
const app = new Koa();
/**
 * Head
 * @type {ApolloServer}
 */
const apolloServer = new ApolloServer({ schema, ...gqlConfig });
apolloServer.applyMiddleware({ app });

app.listen(GRAPHQL.port, GRAPHQL.host, () =>
  console.log(`🚀 Server ready at
http://${GRAPHQL.host}:${GRAPHQL.port}${apolloServer.graphqlPath}`),
);

const optionsHttp2 = {
  key: fs.readFileSync('./certificates/localhost-privkey.pem'),
  cert: fs.readFileSync('./certificates/localhost-cert.pem'),
};
const server2 = https.createServer(optionsHttp2, app.callback());
server2.listen(4001, GRAPHQL.host, () =>
  console.log(
    `🚀 Server ready at https://${GRAPHQL.host}:${4001}${
      apolloServer.graphqlPath
    }`,
  ),
);

server2.on('error', err => console.error(err));
