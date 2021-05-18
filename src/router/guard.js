export default function mixinRouterGuard(router) {
  router.beforeEach((to, from, next) => {
    const { title = '默认title' } = to.meta
    document.title = title
    next()
  })
  return router
}
