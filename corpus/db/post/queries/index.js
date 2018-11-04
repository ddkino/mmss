import head from './head';
import hand from './hand';
import body from './body';
import { dbConnection, cacheConnection as footRight } from './feet';

// hand is like a proxy, it's more functional
// hand over head
hand.subscribe('gql.query.posts', async (message, replyTo) => {
  // head is like a router
  const footLeft = await dbConnection();
  const response = await body(footLeft, footRight, head(message));

  // hand agreement / shaking
  const r = await response.toArray();
  console.log(r);
  hand.publish(replyTo, JSON.stringify(r));
});
