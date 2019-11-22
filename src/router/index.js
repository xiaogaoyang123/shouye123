import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import denglu from '@/components/denglu'
import shouye from '@/components/shouye'
import sousuo from '@/components/sousuo'
import shouye1 from '@/components/shouye1'
import zhuce from '@/components/zhuce'
import denglufangshi from '@/components/denglufangshi'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/shouye',
      name: 'shouye',
      component: shouye
    },
    {
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo
    },
    {
      path: '/shouye1',
      name: 'shouye1',
      component: shouye1
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/denglufangshi',
      name: 'denglufangshi',
      component: denglufangshi
    }
  ]
})
