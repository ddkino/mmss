import path from 'path';
import { mergeTypes, fileLoader } from 'merge-graphql-schemas';

const typesArray = fileLoader(path.join(__dirname, './*.graphqls'));

export default mergeTypes(typesArray);
