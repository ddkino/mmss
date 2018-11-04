import Koa from 'koa';
import Cors from '@koa/cors';
import KoaBody from 'koa-bodyparser';
import { SERVER } from './const';

import { graphql as gqlServer, rest } from './routes';

const app = new Koa();
/* eslint-disable */
/**
 * Koa events
 */
app.on('error', err => {
  console.error('server error', err);
});

app.use(Cors());
app.use(KoaBody());

gqlServer.applyMiddleware({ app });

app.use(rest.routes());
app.use(rest.allowedMethods());

app.listen(SERVER.port, SERVER.hostname, () =>
  console.log(`✅  The server is running at http://localhost:${SERVER.port}/`),
);

export default app;
