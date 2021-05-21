/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  // {
  //   path: '/',
  //   component: () => import('@/views/layouts/index'),
  //   redirect: '/home',
  //   meta: {
  //     title: '首页',
  //     keepAlive: false
  //   },
  //   children: [
  //     {
  //       path: '/home',
  //       name: 'Home',
  //       component: () => import('@/views/home/index'),
  //       meta: { title: '首页', keepAlive: false }
  //     },
  //     {
  //       path: '/about',
  //       name: 'About',
  //       component: () => import('@/views/home/about'),
  //       meta: { title: '关于我', keepAlive: false }
  //     }
  //   ]
  // },
  {
    path: '/login',
    component: () => import('views/login'),
    meta: { title: '登录', keepAlive: false }
  },
  {
    path: '/customer/auth',
    component: () => import('@/views/customer/auth'),
    meta: { title: '授权', keepAlive: false }
  },
  {
    path: '/customer',
    component: () => import('@/views/customer/index'),
    meta: { title: '我的', keepAlive: false }
  },
  {
    path: '/check/in',
    component: () => import('@/views/home/checkIn/index'),
    meta: { title: '每日签到', keepAlive: false }
  },
  {
    path: '/activity',
    component: () => import('@/views/home/activity/index'),
    meta: { title: '活动列表', keepAlive: false }
  }
]
