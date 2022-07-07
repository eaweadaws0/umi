export default [
  {
    path: '/',
    exact: true,
    component: '@/layouts/index',
    name: '首页',
    routes: [
      {
        path: '/about',
        name: '关于',
        exact: true,
        component: '@/pages/about'
      },
      {
        path: '/order',
        component: '@/pages/order',
        name: '订单管理',
        routes: [
          {
            path: '/order/innerOrder',
            name: '内部订单',
            component: '@/pages/order/innerOrder'
          },
          {
            path: '/order/clientOrder',
            name: '客户订单',
            component: '@/pages/order/clientOrder'
          }
        ]
      },
    ]
  }
]
