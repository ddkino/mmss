import { makeExecutableSchema } from 'graphql-tools';
import { mergeTypes } from 'merge-graphql-schemas';

import resolvers from './resolvers';
import typeDefs from './types';

const RootQuery = `
  type RootQuery {
    postAll: [Post]!
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

const schema = makeExecutableSchema({
  typeDefs: mergeTypes([typeDefs, SchemaDefinition, RootQuery]),
  resolvers,
});

export default schema;
