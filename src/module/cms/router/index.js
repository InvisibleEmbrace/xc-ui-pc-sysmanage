import Home from '@/module/home/page/home.vue';
import page_list from '@/module/cms/page/page_list.vue';

export default [{
    path: '/',
    component: Home,
    name: 'CMS',
    /*通过判断路由对象里面的hidden值选择是否渲染该路由入口，然而你在路由视图里面是无法通过$route.hidden来取得路由对象的hidden属性的，因为路由渲染的时候会把无关的字段忽略掉。说到底这个只是一个判断路由入口是否可见的开关而已，具体你可以找一下路由的组件渲染方式看一下*/
    hidden: false,
    children: [
      {path: '/cms/page/list', name: '页面列表', component: page_list, hidden: false}
    ]
  }
]

