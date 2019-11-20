import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import denglu from '@/components/denglu'
import shouye from '@/components/shouye'
import shouye1 from '@/components/shouye1'
import denglufangshi from '@/components/denglufangshi'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'one',
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
      path: '/shouye1',
      name: 'shouye1',
      component: shouye
    },
    {
      path: '/denglufangshi',
      name: 'denglufangshi',
      component: denglufangshi
    }
  ]
})
