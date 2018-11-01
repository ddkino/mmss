// import moment from 'moment';

export const SERVER = {
  http: process.env.HTTP,
  appName: process.env.APP_NAME,
  logType: process.env.LOGTYPE,
  port: process.env.PORT,
  hostname: process.env.HOSTNAME,
  emailFrom: process.env.EMAIL_FROM,
  pathValidation: process.env.VALIDATION,
  userId: process.env.USER_ID || undefined,
};

export const EMAIL = {
  from: process.env.EMAIL_FROM,
};

export const NATS = {
  ports: String(process.env.NATS_PORT).split(','),
  hosts: String(process.env.NATS_HOST).split(','),
  user: process.env.NATS_USER,
  password: process.env.NATS_PASSWORD,
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
  secret: process.env.CRYPTO_SECRET || 'ù=*ç_(é....? "#{',
  //
  old_2017: process.env.CRYPTO_old2017 || '',
};

/**
 * config from jsonwebtoken but implement with koa-koaJwt
 * more info https://github.com/auth0/node-jsonwebtoken
 */
/**
 export const JWT = {
  secret: process.env.JWT_SECRET,
  getToken: ctx => {
    // always lower case
    const { authorization } = ctx.headers;
    if (authorization && authorization.split(' ')[0] === 'Bearer') {
      console.log('gettoken 1 bearer');
      return authorization.split(' ')[1];
    }
    if (ctx.query && ctx.query.token) {
      console.log('gettoken 2 query ');
      return ctx.query.token;
    }
    if (ctx.session && ctx.session.token) {
      console.log('gettoken 3 session');
      return ctx.session.token;
    }
    // console.log('gettoken null');
    return null;
  },
  // changing is server = passthrough dev mode
  expiresIn: process.env.NODE_ENV === 'production' ? '36h' : '1w',
  getExpiresdate: () =>
    process.env.NODE_ENV === 'production'
      ? moment()
        .add('36', 'h')
        .utc()
        .toDate()
      : moment()
        .add('1', 'w')
        .utc()
        .toDate(),
};
 */
