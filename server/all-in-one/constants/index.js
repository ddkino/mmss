import moment from 'moment';

/**
 * map env variables to js constants
 */

export const NATS = {
  port: process.env.NATS_port || [ '4222', '4223' ],
  host: process.env.NATS_host || [ 'localhost', 'localhost' ],
  user: process.env.NATS_user || 'dede',
  password: process.env.NATS_password || '123456',
};

export const ENV = {
  http: process.env.CHA_HTTP || 'http',
  appName: process.env.CHA_APP_NAME || 'cha back dev',
  env: process.env.NODE_ENV || 'development',
  logType: process.env.CHA_LOGTYPE || 'development',
  port: process.env.CHA_PORT || 9000,
  hostname: process.env.CHA_HOSTNAME || 'localhost',
  emailFrom: process.env.CHA_EMAIL_FROM || 'noreply@yopmail.com',
  pathValidation: process.env.CHA_VALIDATION || 'user/validation',
  userId: process.env.USER_ID || undefined,
};

export const STATIC = {
  port: process.env.STATIC_PORT || 9001,
  hostname: process.env.STATIC_HOSTNAME || 'localhost',
};

export const GRAPHQL = {
  formatErrorDev: error => ({
    message: error.message,
    state: error.originalError && error.originalError.state,
    locations: error.locations,
    path: error.path,
    stack: error.stack,
  }),
  formatErrorProd: error => ({
    message: error.message,
  }),
};
/**
 * Each year change crypto
 */
export const CRYPTO = {
  // current year
  secret: process.env.CRYPTO_secret || 'ù=*ç_(é....? "#{',
  //
  old_2017: process.env.CRYPTO_old2017 || '',
};

/**
 * config from jsonwebtoken but implement with koa-koaJwt
 * more info https://github.com/auth0/node-jsonwebtoken
 */
export const JWT = {
  secret: process.env.JWT_secret || 'dede # gege ^ @toto ^##^',
  getToken: (ctx) => {
    /**
     * always lower case
     */
    const {
      authorization,
    } = ctx.headers;
    if (authorization && authorization.split(' ')[0] === 'Bearer') {
      console.log('gettoken 1 bearer');
      return authorization.split(' ')[1];
    } if (ctx.query && ctx.query.token) {
      console.log('gettoken 2 query ');
      return ctx.query.token;
    } if (ctx.session && ctx.session.token) {
      console.log('gettoken 3 session');
      return ctx.session.token;
    }
    // console.log('gettoken null');
    return null;
  },
  // changing is server = passthrough dev mode
  expiresIn: (process.env.NODE_ENV === 'production') ? '36h' : '1w',
  getExpiresdate: () => (
    (process.env.NODE_ENV === 'production') ? moment().add('36', 'h').utc().toDate() : moment().add('1', 'w').utc().toDate()
  ),
};

/**
 * default settings
 */
export const APPCONTEXT = {
  country: process.env.USER_country || 'US',
  language: process.env.USER_language || 'en',
  zones: process.env.USER_zones || ['US_WE'],
  role: process.env.USER_role || 'basic',
  timezone: process.env.USER_tz || 'America/Los_Angeles',
};

// todo array of port / host
export const CASSANDRA = {
  multihost: process.env.CASS_port || ['localhost:9042'],
};
