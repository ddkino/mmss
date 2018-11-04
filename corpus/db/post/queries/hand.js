import NatsClient from 'nats';
import { NATS } from '../../../../const';

const servers = [];
NATS.hosts.forEach((hosts, i) => {
  servers.push(`nats://${NATS.hosts[i]}:${NATS.ports[i]}`);
});
const nats = NatsClient.connect({
  servers,
  user: NATS.user,
  pass: NATS.password,
});

export default nats;
