import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index/Index'
import Login from './views/login/Login'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
          {path: '',name: 'Shouyedaping',component: ()=>import('./views/shouyedaping/Shouyedaping')},
          {path: '/shujuzhongxin',name: 'Shujuzhongxin',component: ()=>import('./views/shouyedaping/Shujuzhongxin')},
          {path: '/equipmentledger',name: 'Shebeitaizhang',component: ()=>import('./views/taizhangguanli/Shebeitaizhang')},
          {path: '/communication',name: 'Shebeileixing',component: ()=>import('./views/taizhangguanli/Tongxinguanli')},
          {path: '/notice',name: 'Gonggaoguanli',component: ()=>import('./views/kefuzhongxin/Gonggaoguanli')},
          {path: '/permissionmanagement',name: 'Quanxianguanli',component: ()=>import('./views/xitongshezhi/Quanxianguanli')},
          {path: 'unitmanagement',name: 'Danweiguanli',component: ()=>import('./views/xitongshezhi/Danweiguanli')},
          {path: '/rolemanagement',name: 'Jiaoseguanli',component: ()=>import('./views/xitongshezhi/Jiaoseguanli')},
          {path: '/datadictionary',name: 'Shujuzidian',component: ()=>import('./views/xitongshezhi/Shujuzidian')},
          {path: '/realtimevalue',name: 'Shishishuju',component: ()=>import('./views/yunweizhongxin/Shishishuju')},//实时数据
          {path: '/alarminformation',name: 'Gaojinxinxi',component: ()=>import('./views/yunweizhongxin/Gaojingxinxi')},//告警信息
          {path: '/realtimevideo',name: 'Shipingjiankong',component: ()=>import('./views/yunweizhongxin/Shipingjiankong')},//视频监控
          {path: '/historyvalue',name: 'Lishishuju',component: ()=>import('./views/shujufenxi/Lishishuju')},//历史数据
          {path: '/datareport',name: 'Shujubaobiao',component: ()=>import('./views/shujufenxi/Shujubaobiao')},//数据报表
      ]
    },
      {
          path:'/login',
          name:'Login',
          component:Login,
      }


  ]
})
