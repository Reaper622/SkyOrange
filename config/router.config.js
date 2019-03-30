export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      // 直接访问默认跳转至投资者资金页面
      {
        // investor money
        path: '/investor/',
        name: '投资者资金',
        icon: 'money-collect',
        routes: [
          // 资金明细
          {
            path: '/investor/info',
            component: './Dashboard/Analysis',
            name: '投资者资金明细'
          },
          // 资金管理
          {
            path: '/investor/management',
            component: './Dashboard/Monitor',
            name: '投资者资金管理',
          }
        ]
      },
      {
        // investor info
        path: '/investorinfo',
        name: '投资者信息',
        icon: 'user',
        routes: [
          // 投资者信息明细
          {
            path: '/investorinfo/info',
            name: '投资者信息明细',
            icon: 'solution',
            component: './Account/Settings/BaseView',
          }
        ]
      },
      // 404页面
      {component: '404'}
    ]
  },
]
