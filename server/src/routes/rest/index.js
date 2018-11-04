import KoaRouter from 'koa-router';

const router = new KoaRouter();

router.all('/api', async ctx => {
  ctx.body = 'Hello Api';
});

export default router;
