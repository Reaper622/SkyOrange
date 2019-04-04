export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {path: '/', redirect: '/bulletion-board/info'},
      // 直接访问默认跳转公告信息
      {
        path: '/bulletion-board',
        name: '公告信息',
        icon: 'notification',
        routes: [
          {
            path: '/bulletion-board/info',
            name: '公告信息',
            component: './BulletionBoard/BulletionBoard',
          },
          {
            path: '/bulletion-board/management',
            name: '公告信息管理',
            component: './BulletionBoard/BulletionBoardManagement'
          }
        ]
      },
      // 投资者相关页面
      {
        // investor money
        path: '/investor/',
        name: '投资者资金',
        icon: 'money-collect',
        routes: [
          // 资金明细
          {
            path: '/investor/info',
            component: './Investor/InvestorMoney',
            name: '投资者资金明细'
          },
          // 资金管理
          {
            path: '/investor/management',
            component: './Investor/InvestorManagement',
            name: '投资者资金管理',
          }
        ]
      },
      {
        // investor info
        path: '/investor-info',
        name: '投资者信息',
        icon: 'user',
        routes: [
          // 投资者信息明细
          {
            path: '/investor-info/info',
            name: '投资者信息明细',
            icon: 'solution',
            component: './Account/Settings/BaseView',
          }
        ]
      },
      // 系统管理信息
      {
        // system management
        path: '/system',
        name: '系统管理',
        icon: 'tool',
        routes: [
          // 系统资金概况
          {
            path: '/system/money-situation',
            name: '系统资金概况',
            component: './System/SystemMoney'
          },
          // 投资者管理
          {
            path: '/system/investor-management',
            name: '投资者管理',
            routes: [
              // 投资者资金流动明细
              {
                path: '/system/investor-management/money-detail',
                name: '投资者资金流动明细',
                component: './System/SystemInvestor/InvestorMoneyDetail'
              },
              // 提款申请审批
              {
                path: '/system/investor-management/payout-request',
                name: '提款申请审批',
                component: './System/SystemInvestor/WithDrawals'
              },
              // 投资者信息管理
              {
                path: '/system/investor-management/info-management',
                name: '投资者信息管理',
                component: './List/CardList'
              }
            ]
          },
          // 内部管理文件
          {
            path: '/system/file-management',
            name: '内部管理文件',
            component: './Forms/AdvancedForm'
          }
        ]
      },
      // 404页面
      {component: '404'}
    ]
  },
]
