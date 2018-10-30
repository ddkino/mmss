import path from 'path';
import dotenv from 'dotenv';

let result;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  result = dotenv.config({ path: path.join(__dirname, 'development.env') });
}
if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
  result = dotenv.config({ path: path.join(__dirname, 'production.env') });
}
if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') {
  result = dotenv.config({ path: path.join(__dirname, 'test.env') });
}
if (result.error) {
  throw result.error;
}
