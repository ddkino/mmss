import { MongoClient } from 'mongodb';
import Redis from 'redis';
import { MONGO, REDIS } from '../../../../const';

const url = `mongodb://${MONGO.user}:${MONGO.password}@${MONGO.host}:${
  MONGO.port
}/${MONGO.db}`;
export const dbConnection = async () => {
  try {
    const client = await MongoClient.connect(
      url,
      { useNewUrlParser: true, authMechanism: 'SCRAM-SHA-1' },
    );
    const db = client.db(MONGO.db);
    return db;
  } catch (e) {
    throw new Error(e);
  }
};

// export const cacheConnection = Redis.createClient({
//   host: REDIS.host, port: REDIS.port, db: REDIS.db,
// });
