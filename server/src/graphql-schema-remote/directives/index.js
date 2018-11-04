export default {
  requiresAuth: (next, src, args, ctx) => {
    if (ctx.env === 'development') return next();
    try {
      if (!ctx.session.user_id) {
        throw new Error([{ key: 'REQUIRE_AUTH_FAILED', message: `${ctx}` }]);
      }
    } catch (err) {
      throw new Error([{ key: 'REQUIRE_AUTH_ERR', message: `${err}` }]);
    }
    return next();
  },
  requiresOwner: (next, src, args, ctx) => {
    if (ctx.env === 'development') {
      console.log('development : requiresOwner', ctx.session.user_id);
      return next();
    }
    try {
      if (ctx.session.user_id !== String(args.a_id)) {
        throw new Error([{ key: 'REQUIRE_OWNER_FAILED', message: `${ctx}` }]);
      }
    } catch (err) {
      throw new Error([{ key: 'REQUIRE_OWNER_ERR', message: `${err}` }]);
    }
    return next();
  },
  requiresAdmin: (next, src, args, ctx) => {
    if (ctx.env === 'development') return next();
    try {
      if (!ctx.session.role === 'admin') {
        throw new Error([{ key: 'REQUIRE_ADMIN_FAILED', message: `${ctx}` }]);
      }
    } catch (err) {
      throw new Error([{ key: 'REQUIRE_ADMIN_ERR', message: `${err}` }]);
    }
    return next();
  },
};
