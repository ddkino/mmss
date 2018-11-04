import { graphql } from 'graphql';
import NatsClient from 'nats';
import schema from './schema';
import { NATS } from '../const';

const servers = [];
NATS.hosts.forEach((hosts, i) => {
  servers.push(`nats://${NATS.hosts[i]}:${NATS.ports[i]}`);
});
const nats = NatsClient.connect({
  servers,
  user: NATS.user,
  pass: NATS.password,
});
// Simple Publisher
nats.requestOne('gql.query.posts', 'Hello World!');

// nats.subscribe('gql.query.posts', (options) => {
//   console.log(options);
//   const query = `{
//     posts {
//       id
//     }
//   }`;
//   graphql(schema, query).then((result) => {
//     console.log(result.data.posts);
//   });
// });
