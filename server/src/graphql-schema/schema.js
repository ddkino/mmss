import { HttpLink } from 'apollo-link-http';
import {
  makeExecutableSchema,
  introspectSchema,
  mergeSchemas,
} from 'graphql-tools';
import fetch from 'node-fetch';
import makeRemoteExecutableSchema from 'graphql-tools/dist/stitching/makeRemoteExecutableSchema';
import { mergeTypes } from 'merge-graphql-schemas';
import resolvers from './resolvers';
import typeDefs from './types';

const RootQuery = `
  type RootQuery {
    post(id: Int!): Post
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

const link = new HttpLink({ uri: 'http://localhost:5000/graphql', fetch });

const schema2 = async () => {
  const schemaRemote = await introspectSchema(link);
  const executableSchema = makeRemoteExecutableSchema({
    schema: schemaRemote,
    link,
  });
  return executableSchema;
};

const schemaFull = mergeSchemas({ schemas: [schema, schema2()] });

export default schemaFull;
